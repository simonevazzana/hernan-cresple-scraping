const { startDb } = require('./db')

const saveBoardData = async ({ team }) => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')
  const TeamProfiles = db.collection('teamProfiles')

  const { teamId, season, ...toSet } = team
  const { active, allPlayers, boardPlayers, ...seasonProperties } = team

  if (!active) delete team.boardPlayers

  const teamProfileUpdateQuery = getTeamProfileUpdateQuery({ team, seasonProperties })
  await TeamProfiles.findOneAndUpdate({ teamId }, teamProfileUpdateQuery, { upsert: true })

  for (const player of team.allPlayers) {
    const { name, playerId, appearances } = player

    const teamMates = allPlayers.filter(p => p.playerId !== playerId).map(p => {
      return { name: p.name, playerId: p.playerId }
    })
    const updateQuery = { $addToSet: { allTeams: { ...seasonProperties }, teamMates: { $each: teamMates } } }

    if (active && boardPlayers.some(p => p.playerId === playerId)) {
      updateQuery.$addToSet = { ...updateQuery.$addToSet, boardTeams: { ...seasonProperties } }
    }

    if (appearances) {
      updateQuery.$set = {
        active: true
      }
    } else {
      updateQuery.$setOnInsert = {
        active: false
      }
    }

    await Players.findOneAndUpdate({ name, playerId }, updateQuery, { upsert: true })
  }

  await Teams.findOneAndUpdate({ teamId, season }, { $set: { ...toSet } }, { upsert: true })
}

const getBaseTeamName = ({ name }) => {
  const baseTeamNameMatch = name.match(/(?<teamName>.+) \d{4}\/\d{4}$/)
  if (!baseTeamNameMatch?.groups?.teamName) throw new Error(`Name ${name} is invalid`)

  return baseTeamNameMatch.groups.teamName
}

const getTeamProfileUpdateQuery = ({ team, seasonProperties }) => {
  const baseTeamName = getBaseTeamName({ name: team.name })

  const updateQuery = { $addToSet: { teamNames: baseTeamName }, $set: { }, $inc: { totalRelevancy: team.relevancy } }
  updateQuery.$set[`seasons.${team.season}`] = seasonProperties

  return updateQuery
}

module.exports = {
  saveBoardData
}
