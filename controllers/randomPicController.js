const API_KEY = process.env.NASA_KEY
const fetch = require("node-fetch")

function getPic(req, res, next) {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  const random = randomDate(new Date(2012, 0, 1), new Date())
    .toISOString()
    .slice(0, 10)
  const NASA_URL = `https://api.nasa.gov/planetary/apod?date=${random}&api_key=${API_KEY}`
  return fetch(NASA_URL)
    .then(response => response.json())
    .then(pic => res.json({ pic: pic, date: random }))
    .catch(err => {
      console.warn(err)
      return res.json({ err })
    })
}

module.exports = {
  getPic
}
