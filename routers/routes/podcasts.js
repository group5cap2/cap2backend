const express = require("express");
const podcasts = express.Router();

const { getAll, getName, searchPodcasts } = require("../controllers/podcasts");

podcasts.get("/", getAll);

podcasts.get("/name", getName);
podcasts.get("/search/:term", searchPodcasts);

module.exports = podcasts;
