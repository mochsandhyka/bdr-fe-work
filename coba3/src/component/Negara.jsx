import React, { useEffect, useState } from "react";

export const DestinasiList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch("https://bdr.vercel.app/api/v1/countries"); // Update this URL with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data.data); // Access the data property if the structure matches your provided example
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Countries List</h1>
      {countries.map((country) => (
        <div key={country._id}>
          <h2>
            {country.namaNegaraInd} / {country.namaNegaraEn}
          </h2>
          <h1>
            {country.desEn}/{country.desInd}
          </h1>
          <img
            src={country.img}
            alt={country.namaNegaraEn}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};
