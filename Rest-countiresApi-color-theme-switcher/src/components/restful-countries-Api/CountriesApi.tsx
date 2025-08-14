import { useEffect, useState } from "react";
//import CountryCard from "../CountryCard/CountryCard";
import type { countrydetails } from "../CountryCard/CountryCard";
import CountryCard from "../CountryCard/CountryCard";
function CountriesApi() {
  const [countries, setcntry] = useState<countrydetails[]>([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const mappedData: countrydetails[] = data.map((n) => {
          return {
            name: n.name.common,
            nativename: n.name.official,
            population: n.population.toLocaleString(),
            region: n.region,
            subregion: n.subregion,
            capital: n.capital || [],
            topleveldomain: n.tld || [],
            currencies: n.currencies
              ? Object.values(n.currencies).map(
                  (cur: any) => `${cur.name} (${cur.symbol})`
                )
              : [],
            languages: n.languages ? Object.values(n.languages) : [],
            flag: {
              imgurl: n.flags?.png,
              alt: n.flags?.alt || "Flag",
            },
            bordercountries: n.borders || [],
          };
        });
        setcntry(mappedData);
      })

      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  return countries.map((country, index) => {
    <CountryCard
      key={index}
      name={country.name}
      nativename={country.nativename}
      population={country.population}
      region={country.region}
      subregion={country.subregion}
      capital={country.capital}
      topleveldomain={country.topleveldomain}
      currencies={country.currencies}
      languages={country.languages}
      flag={country.flag}
      bordercountries={country.bordercountries}
    />;
  });
}

export default CountriesApi;
