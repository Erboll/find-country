import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Country } from "./types";

const URL = "https://restcountries.com/v3.1/name/";
function App() {
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState<Country[]>([]);
  const useDebounce = (value: string, delay: number = 300) => {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounced(value);
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
    return debounced;
  };
  const debounce = useDebounce(country);

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios.get(URL + debounce);
      setCountryName(response.data);
    };
    if (debounce.trim().length === 0) {
      setCountryName([]);
    }

    fetchCountry();
  }, [debounce]);

  return (
    <div className="App">
      <h1>Find country</h1>
      <div>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>Found country : {countryName?.length}</div>
      <div>
        {countryName.map((country) => (
          <p key={country.area}>{country.name.common}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
