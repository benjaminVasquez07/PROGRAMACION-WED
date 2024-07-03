import React, { useState, useEffect } from "react";

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/c37b2489fc2b833dff13e67c/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([
          data.base_code,
          ...Object.keys(data.conversion_rates),
        ]);
      });
  }, []);

  const handleConvert = () => {
    fetch(
      `https://v6.exchangerate-api.com/v6/c37b2489fc2b833dff13e67c/pair/${fromCurrency}/${toCurrency}/${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        setConversionResult(data.conversion_result);
      });
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <div>
        <label>From: </label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To: </label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {conversionResult && (
        <div>
          <h3>Conversion Result: {conversionResult}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
