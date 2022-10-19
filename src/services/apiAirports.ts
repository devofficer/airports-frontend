import { MAP_BOUNDS } from "../utils/constants";
import aviationstackService from "./aviationService";

export const getAirports = async (params?: QueryParams) => {
  const { data: airports } = await aviationstackService.get('/airports', {
    params
  });
  return airports.filter((ap: Airport) =>
    ap.country_name === 'United States' &&
    ap.latitude >= MAP_BOUNDS.south &&
    ap.latitude <= MAP_BOUNDS.north &&
    ap.longitude >= MAP_BOUNDS.west &&
    ap.longitude <= MAP_BOUNDS.east
  );
}
