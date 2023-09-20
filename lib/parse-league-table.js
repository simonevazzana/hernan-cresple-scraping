const cheerio = require('cheerio')

const parseLeagueTable = ({ body, league, leagueProperties, season }) => {
  if (leagueProperties.finalSeason > season) {
    console.log(`For this league the final scrapeable season is ${leagueProperties.finalSeason}, skipping this one...`)
    return []
  }

  const $ = cheerio.load(body)

  const leagueTableRef = $('table.items > tbody')

  const leagueTable = []
  let position = 1
  for (const teamRow of leagueTableRef.children()) {
    const baseTeamUrl = $(teamRow).find('a').attr('href')

    const teamIdMatch = baseTeamUrl.match(/verein\/(?<tid>\d+)/)
    if (!teamIdMatch?.groups?.tid) throw new Error(`Found team url without a teamId: ${baseTeamUrl}`)
    const teamId = teamIdMatch.groups.tid

    const name = `${$(teamRow).find('a').attr('title')} ${season}/${season + 1}`

    const team = {
      league,
      name,
      position,
      season,
      teamId
    }

    leagueTable.push(team)
    position++
  }

  return leagueTable
}

module.exports = {
  parseLeagueTable
}
