type AirportType = {
  airport_id: string;
  airport_name: string;
  city_iata_code: string;
  country_iso2: string;
  country_name: string;
  geoname_id: string;
  gmt: number;
  iata_code: string;
  icao_code: string;
  id: number;
  latitude: number;
  longitude: number;
  phone_number: string;
  timezone: string;
}

interface Pagination {
  limit?: number;
  offset?: number;
}

interface QueryParams extends Pagination {
  search?: string;
}

interface LatLngPt {
  latitude: number;
  longitude: number;
}
