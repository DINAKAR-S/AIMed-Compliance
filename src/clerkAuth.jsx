import { ClerkProvider } from "@clerk/clerk-react";

const clerkPublicKey = "pk_test_c2VjdXJlLWpheS01OS5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with actual key

export default function ClerkAuthProvider({ children }) {
  return <ClerkProvider publishableKey={clerkPublicKey}>{children}</ClerkProvider>;
}
