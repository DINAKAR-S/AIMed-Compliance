import { useState } from "react";
import styles from "./PincodeSearch.module.css";

const PincodeSearch = () => {
  const [pincode, setPincode] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${pincode}&country=india&format=json`
    );
    const data = await response.json();
    setHospitals(data);
  };

  return (
    <div className={styles.PincodeContainer}>
      <h3>Find Hospitals Near You</h3>
      <input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className={styles.InputBox}
      />
      <button onClick={handleSearch} className={styles.SearchButton}>
        Search
      </button>

      <div className={styles.HospitalList}>
        {hospitals.length > 0
          ? hospitals.map((hospital, index) => (
              <p key={index}>{hospital.display_name}</p>
            ))
          : "Enter a pincode to see results"}
      </div>
    </div>
  );
};

export default PincodeSearch;
