import { useState } from "react";
import styles from "./HospitalFinder.module.css";

const HospitalFinder = () => {
  const [pincode, setPincode] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleSearch = () => {
    if (!pincode.trim()) return;
    setMapUrl(`https://nominatim.openstreetmap.org/ui/search.html?postalcode=${pincode}&country=india`);
  };

  return (
    <div className={styles.hospitalFinderContainer}>
      <h2>Find Hospitals Near You</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {mapUrl && <iframe src={mapUrl} className={styles.mapFrame} title="Hospital Locator"></iframe>}
    </div>
  );
};

export default HospitalFinder;
