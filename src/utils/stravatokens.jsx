export const accessToken = "e3db5fa8f78fde1b2e617af4b2298d8767781fc0";
export const refreshToken = "882bc3cc7a516b489f90c0c7d55e8ef3226c8814";
export const stravaEndpoint = "https://www.strava.com/api/v3/athlete/activities";

export const fetchMethodAndHeaders = {
  method: "POST",
  headers: {
    Authorization: `Bearer #${accessToken}`,
    // ...appIdAndKey,
  },
};

export const trafficEndpoint = "https://511on.ca/api/v2/get/roadconditions";

export const fetchMethodAndHeadersTraffic = {
  mode: "no-cors",
  method: "GET",
  resource: "events",
  params: { format: "json", lang: "en" },

};
