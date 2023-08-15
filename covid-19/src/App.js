import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    async function fetchData() {
      let url = "https://corona.lmao.ninja/v3/covid-19/";

      if (selectedCountry !== "world" && selectedCountry !== "") {
        url += `countries/${selectedCountry}`;
      } else {
        url += "all";
      }

      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  console.log(data);

  const popularCountries = [
    "world",
    "USA",
    "India",
    "Brazil",
    "UK",
    "Turkey",
    "France",
    "Russia",
    "Italy",
    "Spain",
    "Germany",
    "Argentina",
    "Colombia",
    "Mexico",
    "Iran",
  ];

  return (
    <div className="App">
      <h1>COVID-19 İstatistikleri</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Ülke Seçin --</option>
        {popularCountries.map((country) => (
          <option key={country} value={country}>
            {country === "world" ? "Dünya" : country}
          </option>
        ))}
      </select>
      <div>
        <h2>{selectedCountry === "" ? "Genel" : data.country} Verileri</h2>
        <h3>Vaka Sayısı: {data.cases}</h3>
        <p>Ölüm Sayısı: {data.deaths}</p>
        <p>İyileşen Sayısı: {data.recovered}</p>
        <p>Aktif Vakalar: {data.active}</p>
        <p>Toplam Test Sayısı: {data.tests}</p>
      </div>
    </div>
  );
}

export default App;
