import aeroService from "./aeroService";

export const getAirports = async () => {
  return aeroService.get('/airports');
}