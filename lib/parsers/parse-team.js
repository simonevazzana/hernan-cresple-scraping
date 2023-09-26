const cheerio = require('cheerio')

const parseTeam = ({ body, baseTeam }) => {
  const $ = cheerio.load(body)

  const teamTableRef = $('table.items > tbody')

  const allPlayers = []

  for (const playerRow of teamTableRef.children()) {
    const name = $(playerRow).find('td.hauptlink > div:nth-child(1) > span > a').attr('title')
    const playerUrl = $(playerRow).find('td.hauptlink > div:nth-child(1) > span > a').attr('href')
    const playerId = playerUrl.split('/').at(-1)

    const minutesPlayed = +($(playerRow).find('.rechts').html().replace(/[^\d]/gu, '') || 0)
    const appearances = +($(playerRow).find('td:nth-child(6)').html().replace(/[^\d]/gu, '') || 0)
    const goals = +($(playerRow).find('td:nth-child(7)').html().replace(/[^\d]/gu, '') || 0)
    const assists = +($(playerRow).find('td:nth-child(8)').html().replace(/[^\d]/gu, '') || 0)
    const goalContributions = goals + assists

    allPlayers.push({
      name,
      appearances,
      goals,
      assists,
      goalContributions,
      playerId,
      minutesPlayed
    })
  }

  const boardPlayers = finalizeTeam({ allPlayers, position: baseTeam.position })

  return {
    allPlayers: allPlayers.map(p => {
      const { name, playerId, appearances } = p
      return { name, playerId, appearances }
    }),
    boardPlayers: baseTeam.active ? boardPlayers : [],
    ...baseTeam
  }
}

const finalizeTeam = ({ allPlayers, position }) => {
  const teamSize = getTeamSize({ position })

  allPlayers.sort((a, b) => {
    return b.minutesPlayed - a.minutesPlayed
  })

  const bestPlayers = [...allPlayers].sort((a, b) => {
    return b.goalContributions - a.goalContributions
  })

  const boardPlayers = allPlayers.slice(0, teamSize)

  if (!boardPlayers.find(p => bestPlayers[0].playerId === p.playerId)) {
    boardPlayers.push(bestPlayers[0])
  }

  return boardPlayers
}

const getTeamSize = ({ position }) => {
  if (position >= 10) return 11
  if (position >= 5) return 13
  return 15
}

module.exports = {
  parseTeam
}
