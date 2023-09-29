const test = require('ava')
const { parseLeagueTable } = require('./parse-league-table')
const { getLeagueProperties } = require('../utils/get-league-properties')

const readFile = (filename) => require('fs').readFileSync(require('path').join(__dirname, filename))

test('Should correctly parse a league table', t => {
  const body = readFile('../test-fixtures/league-table.html')
  const league = 'bundesliga'
  const leagueProperties = getLeagueProperties[league]
  const season = 2022

  const table = parseLeagueTable({ body, league, leagueProperties, season })

  t.deepEqual(table, [
    {
      active: true,
      league: 'bundesliga',
      name: 'Bayern Munich 2022/2023',
      position: 1,
      relevancy: 100,
      season: 2022,
      teamId: '27'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'Borussia Dortmund 2022/2023',
      position: 2,
      relevancy: 96,
      season: 2022,
      teamId: '16'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'RB Leipzig 2022/2023',
      position: 3,
      relevancy: 92,
      season: 2022,
      teamId: '23826'
    },
    {
      active: true,
      league: 'bundesliga',
      name: '1.FC Union Berlin 2022/2023',
      position: 4,
      relevancy: 88,
      season: 2022,
      teamId: '89'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'SC Freiburg 2022/2023',
      position: 5,
      relevancy: 84,
      season: 2022,
      teamId: '60'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'Bayer 04 Leverkusen 2022/2023',
      position: 6,
      relevancy: 80,
      season: 2022,
      teamId: '15'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'Eintracht Frankfurt 2022/2023',
      position: 7,
      relevancy: 76,
      season: 2022,
      teamId: '24'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'VfL Wolfsburg 2022/2023',
      position: 8,
      relevancy: 72,
      season: 2022,
      teamId: '82'
    },
    {
      active: true,
      league: 'bundesliga',
      name: '1.FSV Mainz 05 2022/2023',
      position: 9,
      relevancy: 68,
      season: 2022,
      teamId: '39'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'Borussia Mönchengladbach 2022/2023',
      position: 10,
      relevancy: 64,
      season: 2022,
      teamId: '18'
    },
    {
      active: true,
      league: 'bundesliga',
      name: '1.FC Köln 2022/2023',
      position: 11,
      relevancy: 60,
      season: 2022,
      teamId: '3'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'TSG 1899 Hoffenheim 2022/2023',
      position: 12,
      relevancy: 56,
      season: 2022,
      teamId: '533'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'SV Werder Bremen 2022/2023',
      position: 13,
      relevancy: 52,
      season: 2022,
      teamId: '86'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'VfL Bochum 2022/2023',
      position: 14,
      relevancy: 48,
      season: 2022,
      teamId: '80'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'FC Augsburg 2022/2023',
      position: 15,
      relevancy: 44,
      season: 2022,
      teamId: '167'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'VfB Stuttgart 2022/2023',
      position: 16,
      relevancy: 40,
      season: 2022,
      teamId: '79'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'FC Schalke 04 2022/2023',
      position: 17,
      relevancy: 36,
      season: 2022,
      teamId: '33'
    },
    {
      active: true,
      league: 'bundesliga',
      name: 'Hertha BSC 2022/2023',
      position: 18,
      relevancy: 32,
      season: 2022,
      teamId: '44'
    }
  ])
})

test('Should label the weaker teams as inactive, if the leagueProperties exclude their league position', t => {
  const body = readFile('../test-fixtures/league-table.html')
  const league = 'ligaportugal'
  const leagueProperties = getLeagueProperties[league]
  const season = 2022

  const table = parseLeagueTable({ body, league, leagueProperties, season })

  t.deepEqual(table, [
    {
      active: true,
      league: 'ligaportugal',
      name: 'Bayern Munich 2022/2023',
      position: 1,
      relevancy: 50,
      season: 2022,
      teamId: '27'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'Borussia Dortmund 2022/2023',
      position: 2,
      relevancy: 48,
      season: 2022,
      teamId: '16'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'RB Leipzig 2022/2023',
      position: 3,
      relevancy: 46,
      season: 2022,
      teamId: '23826'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: '1.FC Union Berlin 2022/2023',
      position: 4,
      relevancy: 44,
      season: 2022,
      teamId: '89'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'SC Freiburg 2022/2023',
      position: 5,
      relevancy: 42,
      season: 2022,
      teamId: '60'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'Bayer 04 Leverkusen 2022/2023',
      position: 6,
      relevancy: 40,
      season: 2022,
      teamId: '15'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'Eintracht Frankfurt 2022/2023',
      position: 7,
      relevancy: 38,
      season: 2022,
      teamId: '24'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'VfL Wolfsburg 2022/2023',
      position: 8,
      relevancy: 36,
      season: 2022,
      teamId: '82'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: '1.FSV Mainz 05 2022/2023',
      position: 9,
      relevancy: 34,
      season: 2022,
      teamId: '39'
    },
    {
      active: true,
      league: 'ligaportugal',
      name: 'Borussia Mönchengladbach 2022/2023',
      position: 10,
      relevancy: 32,
      season: 2022,
      teamId: '18'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: '1.FC Köln 2022/2023',
      position: 11,
      relevancy: 30,
      season: 2022,
      teamId: '3'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'TSG 1899 Hoffenheim 2022/2023',
      position: 12,
      relevancy: 28,
      season: 2022,
      teamId: '533'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'SV Werder Bremen 2022/2023',
      position: 13,
      relevancy: 26,
      season: 2022,
      teamId: '86'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'VfL Bochum 2022/2023',
      position: 14,
      relevancy: 24,
      season: 2022,
      teamId: '80'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'FC Augsburg 2022/2023',
      position: 15,
      relevancy: 22,
      season: 2022,
      teamId: '167'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'VfB Stuttgart 2022/2023',
      position: 16,
      relevancy: 20,
      season: 2022,
      teamId: '79'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'FC Schalke 04 2022/2023',
      position: 17,
      relevancy: 18,
      season: 2022,
      teamId: '33'
    },
    {
      active: false,
      league: 'ligaportugal',
      name: 'Hertha BSC 2022/2023',
      position: 18,
      relevancy: 16,
      season: 2022,
      teamId: '44'
    }
  ])
})

test('Should not parse anything if the season is too early to be fully scraped', t => {
  const body = readFile('../test-fixtures/league-table.html')
  const league = 'bundesliga'
  const leagueProperties = getLeagueProperties[league]
  const season = 1985

  const table = parseLeagueTable({ body, league, leagueProperties, season })

  t.deepEqual(table, [])
})

test('Should throw if no team id was found on a team', t => {
  const body = readFile('../test-fixtures/league-table-no-team-ids.html')
  const league = 'bundesliga'
  const leagueProperties = getLeagueProperties[league]
  const season = 2022

  const error = t.throws(() => parseLeagueTable({ body, league, leagueProperties, season }))

  t.is(error.message, 'Found team url without a teamId: /fc-bayern-munchen/spielplan/verein/')
})
