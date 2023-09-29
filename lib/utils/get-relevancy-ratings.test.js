const test = require('ava')
const { getRelevancyRatings } = require('./get-relevancy-ratings')

test('Should give the correct relevancy ratings for a tier one league', t => {
  const league = 'seriea'

  const relevancyRatings = getRelevancyRatings({ league })

  t.deepEqual(relevancyRatings, {
    1: 100,
    2: 96,
    3: 92,
    4: 88,
    5: 84,
    6: 80,
    7: 76,
    8: 72,
    9: 68,
    10: 64,
    11: 60,
    12: 56,
    13: 52,
    14: 48,
    15: 44,
    16: 40,
    17: 36,
    18: 32,
    19: 28,
    20: 24,
    21: 20,
    22: 16,
    23: 12,
    24: 8
  })
})

test('Should give the correct relevancy ratings for a tier two league', t => {
  const league = 'eredivisie'

  const relevancyRatings = getRelevancyRatings({ league })

  t.deepEqual(relevancyRatings, {
    1: 50,
    2: 48,
    3: 46,
    4: 44,
    5: 42,
    6: 40,
    7: 38,
    8: 36,
    9: 34,
    10: 32,
    11: 30,
    12: 28,
    13: 26,
    14: 24,
    15: 22,
    16: 20,
    17: 18,
    18: 16,
    19: 14,
    20: 12,
    21: 10,
    22: 8,
    23: 6,
    24: 4
  })
})

test('Should throw if the league is not mapped or does not exist', t => {
  const league = 'notexisting'

  const error = t.throws(() => getRelevancyRatings({ league }))
  t.is(error.message, 'The league notexisting is not in any tier')
})
