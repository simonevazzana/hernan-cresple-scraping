const { parseTeam } = require('./parsers/parse-team')

const scrapeTeam = async ({ baseTeam }) => {
  const teamUrl = `https://www.transfermarkt.com/team/leistungsdaten/verein/${baseTeam.teamId}/plus/1?reldata=%26${baseTeam.season}`
  const response = await fetch(teamUrl, { method: 'GET', headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' } })
  const body = await response.text()

  const team = parseTeam({ body, baseTeam })

  return team
}

module.exports = {
  scrapeTeam
}
