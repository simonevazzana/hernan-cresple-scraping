const { startDb } = require('./db')

const saveBoardData = async ({ team }) => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')

  const { teamId, season, ...toSet } = team
  const { active, allPlayers, boardPlayers, ...seasonProperties } = team

  if (!active) delete team.boardPlayers

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

module.exports = {
  saveBoardData
}
