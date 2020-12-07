"use strict";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=1";

const apiCall = () => {
  return fetch(apiUrl).then((response) => response.json());
};

export default apiCall;
