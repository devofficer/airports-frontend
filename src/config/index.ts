export const IS_PROD = process.env.NODE_ENV === 'production';
export const AERO_API_ENDPOINT = IS_PROD ? 'https://montauk-cors.herokuapp.com/https://aeroapi.flightaware.com/aeroapi/' : '/aeroapi';
export const AVIATIONSTACK_API_ENDPOINT = IS_PROD ? 'http://api.aviationstack.com/v1/' : '/aviationstack/v1';
