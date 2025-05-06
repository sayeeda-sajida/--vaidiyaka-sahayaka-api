import React, { useEffect, useState } from "react";
const ViewHospitalList = () => {
  const [hospital, setHospital] = useState([]);

  // Fetch data from backend when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/viewHospitalList");
        const data = await response.json();
        
        setHospital(Array.isArray(data) ? data : data.hospital || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: 2000 }}>
      <h2>List of Govt Speciality Hospitals in Bangalore </h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Disease_Name</th>
            <th>Hospital_Name</th>
            <th>About</th>
            <th>Address</th>
            <th>Contact</th>
          
          </tr>
        </thead>
        <tbody>
          {hospital.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.diseaseName}</td>
              <td>{entry.hospitalName}</td>
              <td>{entry.about}</td>
              <td>{entry.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
 
};

export default ViewHospitalList;