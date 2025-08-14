import "./CountryCard.css";
export interface countrydetails {
  name: string;
  nativename: string;
  population: string;
  region: string;
  subregion: string;
  capital: string[];
  topleveldomain: string;
  currencies: string[];
  languages: string[];
  flag: {
    imgurl: string;
    alt?: string;
  };
  bordercountries: string[];
}

//type cninfo = {
//  props: countrydetails;};

function CountryCard({
  name,
  nativename,
  population,
  region,
  subregion,
  capital,
  topleveldomain,
  currencies,
  languages,
  flag,
  bordercountries,
}: countrydetails) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={flag.imgurl} alt={flag.alt} className="flag" />
      </div>
      <div className="content">
        <div className="content1">
          <h3 id="name">{name}</h3>
          <p>
            <strong>Native Name: </strong>
            {nativename}
          </p>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {subregion}
          </p>
        </div>
        <div className="content2">
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
          <p>
            <strong>Top level Domain: </strong>
            {topleveldomain}
          </p>
          <p>
            <strong>Currencies: </strong>
            {currencies}
          </p>
          <p>
            <strong>Languages: </strong>
            {languages}
          </p>
        </div>
        <div>
          <p>
            <strong>Border Countries: </strong>
            {bordercountries.map((i, index) => (
              <span key={index}>{i}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
