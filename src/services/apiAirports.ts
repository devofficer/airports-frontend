import aviationstackService from "./aviationService";

export const getAirports = async () => {
  return aviationstackService.get('/airports');
}