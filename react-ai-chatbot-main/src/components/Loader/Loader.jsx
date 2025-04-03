import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <div className={styles.Spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
