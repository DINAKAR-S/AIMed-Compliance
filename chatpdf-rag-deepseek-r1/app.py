# app.py
import os
import tempfile
import time
import streamlit as st
from streamlit_chat import message
from rag import ChatPDF

st.set_page_config(page_title="MedAI Compliance - RAG Assistant")


def display_messages():
    """Display the chat history."""
    st.subheader("💬 Chat History")
    for i, (msg, is_user) in enumerate(st.session_state["messages"]):
        message(msg.replace("<think>", "").replace("</think>", ""), is_user=is_user, key=str(i))


def process_input():
    """Process the user input and generate an assistant response."""
    if st.session_state["user_input"] and len(st.session_state["user_input"].strip()) > 0:
        user_text = st.session_state["user_input"].strip()
        try:
            agent_text = st.session_state["assistant"].ask(
                user_text,
                k=st.session_state["retrieval_k"],
                score_threshold=st.session_state["retrieval_threshold"],
            )
        except ValueError as e:
            agent_text = str(e)

        st.session_state["messages"].append((user_text, True))
        st.session_state["messages"].append((agent_text.replace("<think>", "").replace("</think>", ""), False))


def read_and_save_file():
    """Handle file upload and ingestion."""
    st.session_state["assistant"].clear()
    st.session_state["messages"] = []
    st.session_state["user_input"] = ""

    for file in st.session_state["file_uploader"]:
        with tempfile.NamedTemporaryFile(delete=False) as tf:
            tf.write(file.getbuffer())
            file_path = tf.name

        with st.spinner(f"📄 Ingesting {file.name}..."):
            t0 = time.time()
            st.session_state["assistant"].ingest(file_path)
            t1 = time.time()

        st.session_state["messages"].append(
            (f"✅ Successfully ingested {file.name} in {t1 - t0:.2f} seconds.", False)
        )
        os.remove(file_path)


def page():
    """Main app page layout."""
    if len(st.session_state) == 0:
        st.session_state["messages"] = []
        st.session_state["assistant"] = ChatPDF()

    st.title("📚 MedAI PDF Knowledge Assistant")
    st.markdown("Upload healthcare PDFs and ask questions – privately and securely using RAG + DeepSeek-R1")

    st.file_uploader(
        "Upload Medical PDFs", type=["pdf"], key="file_uploader",
        on_change=read_and_save_file, accept_multiple_files=True,
        label_visibility="visible"
    )

    # Retrieval settings
    st.markdown("### ⚙️ RAG Settings")
    st.session_state["retrieval_k"] = st.slider("Top-K Results", 1, 10, value=5)
    st.session_state["retrieval_threshold"] = st.slider("Similarity Threshold", 0.0, 1.0, value=0.2, step=0.05)

    # Chat interface
    display_messages()
    st.text_input("Ask a question...", key="user_input", on_change=process_input)

    if st.button("🧹 Clear Chat"):
        st.session_state["messages"] = []
        st.session_state["assistant"].clear()


if __name__ == "__main__":
    page()
