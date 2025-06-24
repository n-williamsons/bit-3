export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  flag: string;
  flags: {
    png: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    name: string;
  };
}
