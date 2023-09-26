const { parseLeagueTable } = require('./parsers/parse-league-table')
const { saveBoardData } = require('./save-board-data')
const { scrapeTeam } = require('./scrape-team')
const { getLeagueProperties } = require('./utils/get-league-properties')

const scrapeBoard = async ({ league, season }) => {
  league = league.toLowerCase().replace(/[^\p{Ll}\d]/gu, '')
  if (!getLeagueProperties[league]) throw new Error(`Found unsupported league: ${league}`)
  const leagueProperties = getLeagueProperties[league]

  const tableUrl = `https://www.transfermarkt.com/league/tabelle/wettbewerb/${leagueProperties.leagueToUrl}/saison_id/${season}`
  const response = await fetch(tableUrl, { method: 'GET', headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' } })
  const body = await response.text()

  const table = parseLeagueTable({ body, league, leagueProperties, season })

  for (const baseTeam of table) {
    const team = await scrapeTeam({ baseTeam })

    await saveBoardData({ team })

    console.log(`Finished scraping data for ${team.name}, found ${team.allPlayers.length} players`)
  }
}

module.exports = {
  scrapeBoard
}
