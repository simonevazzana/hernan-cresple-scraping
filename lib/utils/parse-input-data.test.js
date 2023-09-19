const test = require('ava')
const { parseStartSeason, parseEndSeason } = require('./parse-input-data')

test('Should correctly parse the startSeason field', t => {
  const startSeason = '2012'

  const startSeasonParsed = parseStartSeason(startSeason)

  t.is(startSeasonParsed, 2012)
})

test('Should correctly detect all errors related to the startSeason field', t => {
  let startSeason = 'Not a number'

  const firstError = t.throws(() => parseStartSeason(startSeason))
  t.is(firstError.message, 'startSeason must be a number, found Not a number instead')

  startSeason = '2023'

  const secondError = t.throws(() => parseStartSeason(startSeason))
  t.is(secondError.message, 'startSeason in input is in the future: 2023')
})

test('Should correctly parse the endSeason field', t => {
  const endSeason = '2012'

  const endSeasonParsed = parseEndSeason(endSeason)

  t.is(endSeasonParsed, 2012)
})

test('Should correctly detect all errors related to the endSeason field', t => {
  let endSeason = 'Not a number'

  const firstError = t.throws(() => parseEndSeason(endSeason))
  t.is(firstError.message, 'endSeason must be a number, found Not a number instead')

  endSeason = '2024'

  const secondError = t.throws(() => parseEndSeason(endSeason))
  t.is(secondError.message, 'endSeason in input is in the future: 2024')
})
