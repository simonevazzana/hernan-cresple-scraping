const { tierOneLeagues, tierTwoLeagues } = require('./get-league-properties')

const tierOneRelevancyRatings = [...Array(24).keys()].reduce((acc, curr) => {
  acc[curr + 1] = 100 - curr * 4
  return acc
}, {})
const tierTwoRelevancyRatings = [...Array(24).keys()].reduce((acc, curr) => {
  acc[curr + 1] = 50 - curr * 2
  return acc
}, {})

const getRelevancyRatings = ({ league }) => {
  if (tierTwoLeagues.includes(league)) return tierTwoRelevancyRatings
  if (tierOneLeagues.includes(league)) return tierOneRelevancyRatings

  throw new Error(`The league ${league} is not in any tier`)
}

module.exports = {
  getRelevancyRatings
}
