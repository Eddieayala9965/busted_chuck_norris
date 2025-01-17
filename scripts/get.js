"use strict";

const get = (url) => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("ERROR:", error);
    });
};
