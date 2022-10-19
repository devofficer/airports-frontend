import aviationstackService from "./aviationService";

export const getAirports = async (params?: QueryParams) => {
  const { data: airports } = await aviationstackService.get('/airports', {
    params
  });
  return airports.filter((ap: AirportType) => ap.country_name === 'United States');
}