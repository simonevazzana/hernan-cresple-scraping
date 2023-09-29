const test = require('ava')
const { startDb } = require('./db')
const { saveBoardData } = require('./save-board-data')

test.beforeEach(async () => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')
  const TeamProfiles = db.collection('teamProfiles')

  await Players.deleteMany({})
  await Teams.deleteMany({})
  await TeamProfiles.deleteMany({})
})

test('Should correctly save all data related to an active team for the board game', async t => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')
  const TeamProfiles = db.collection('teamProfiles')

  const team = {
    active: true,
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        playerId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        playerId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        playerId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        playerId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        playerId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        playerId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        playerId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        playerId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        playerId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        playerId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        playerId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        playerId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        playerId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        playerId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        playerId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        playerId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        playerId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        playerId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        playerId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        playerId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        playerId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        playerId: '435648'
      }
    ],
    boardPlayers: [
      {
        appearances: 47,
        assists: 11,
        goalContributions: 18,
        goals: 7,
        minutesPlayed: 4051,
        name: 'Joshua Kimmich',
        playerId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        appearances: 38,
        assists: 6,
        goalContributions: 18,
        goals: 12,
        minutesPlayed: 2205,
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        appearances: 35,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2170,
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        appearances: 30,
        assists: 4,
        goalContributions: 21,
        goals: 17,
        minutesPlayed: 1805,
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        appearances: 26,
        assists: 4,
        goalContributions: 5,
        goals: 1,
        minutesPlayed: 1569,
        name: 'Noussair Mazraoui',
        playerId: '340456'
      }
    ],
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 1,
    relevancy: 100,
    season: 2022,
    teamId: '27'
  }

  await saveBoardData({ team })

  t.is(await Teams.countDocuments({}), 1)
  const teamOnDb = await Teams.findOne({}, { projection: { _id: 0 } })
  t.deepEqual(teamOnDb, team)

  t.is(await TeamProfiles.countDocuments({}), 1)
  const teamProfileOnDb = await TeamProfiles.findOne({}, { projection: { _id: 0 } })
  t.deepEqual(teamProfileOnDb, {
    seasons: {
      2022: {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    },
    teamId: '27',
    teamNames: [
      'Bayern Munich'
    ],
    totalRelevancy: 100
  })

  t.is(await Players.countDocuments({}), team.allPlayers.length)
  const boardPlayerOnDb = await Players.findOne({ playerId: '161056' }, { projection: { _id: 0 } })
  t.deepEqual(boardPlayerOnDb, {
    active: true,
    allTeams: [
      {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    ],
    boardTeams: [
      {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    ],
    name: 'Joshua Kimmich',
    playerId: '161056',
    teamMates: [
      {
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        name: 'Noussair Mazraoui',
        playerId: '340456'
      },
      {
        name: 'Manuel Neuer',
        playerId: '17259'
      },
      {
        name: 'João Cancelo',
        playerId: '182712'
      },
      {
        name: 'Marcel Sabitzer',
        playerId: '106987'
      },
      {
        name: 'Josip Stanisic',
        playerId: '483046'
      },
      {
        name: 'Ryan Gravenberch',
        playerId: '478573'
      },
      {
        name: 'Lucas Hernández',
        playerId: '281963'
      },
      {
        name: 'Sven Ulreich',
        playerId: '40680'
      },
      {
        name: 'Mathys Tel',
        playerId: '801734'
      },
      {
        name: 'Daley Blind',
        playerId: '12282'
      },
      {
        name: 'Paul Wanner',
        playerId: '900909'
      },
      {
        name: 'Gabriel Vidovic',
        playerId: '604327'
      },
      {
        name: 'Arijon Ibrahimovic',
        playerId: '744728'
      },
      {
        name: 'Bouna Sarr',
        playerId: '190685'
      },
      {
        name: 'Johannes Schenk',
        playerId: '604326'
      },
      {
        name: 'Tanguy Nianzou',
        playerId: '538996'
      },
      {
        name: 'Justin Janitzek',
        playerId: '639580'
      },
      {
        name: 'Liam Morrison',
        playerId: '567114'
      },
      {
        name: 'Gabriel Marusic',
        playerId: '604322'
      },
      {
        name: 'Aleksandar Pavlovic',
        playerId: '792380'
      },
      {
        name: 'Joshua Zirkzee',
        playerId: '435648'
      }
    ]
  })

  const nonBoardPlayerOnDb = await Players.findOne({ playerId: '435648' }, { projection: { _id: 0 } })
  t.deepEqual(nonBoardPlayerOnDb, {
    active: false,
    allTeams: [
      {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    ],
    name: 'Joshua Zirkzee',
    playerId: '435648',
    teamMates: [
      {
        name: 'Joshua Kimmich',
        playerId: '161056'
      },
      {
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        name: 'Noussair Mazraoui',
        playerId: '340456'
      },
      {
        name: 'Manuel Neuer',
        playerId: '17259'
      },
      {
        name: 'João Cancelo',
        playerId: '182712'
      },
      {
        name: 'Marcel Sabitzer',
        playerId: '106987'
      },
      {
        name: 'Josip Stanisic',
        playerId: '483046'
      },
      {
        name: 'Ryan Gravenberch',
        playerId: '478573'
      },
      {
        name: 'Lucas Hernández',
        playerId: '281963'
      },
      {
        name: 'Sven Ulreich',
        playerId: '40680'
      },
      {
        name: 'Mathys Tel',
        playerId: '801734'
      },
      {
        name: 'Daley Blind',
        playerId: '12282'
      },
      {
        name: 'Paul Wanner',
        playerId: '900909'
      },
      {
        name: 'Gabriel Vidovic',
        playerId: '604327'
      },
      {
        name: 'Arijon Ibrahimovic',
        playerId: '744728'
      },
      {
        name: 'Bouna Sarr',
        playerId: '190685'
      },
      {
        name: 'Johannes Schenk',
        playerId: '604326'
      },
      {
        name: 'Tanguy Nianzou',
        playerId: '538996'
      },
      {
        name: 'Justin Janitzek',
        playerId: '639580'
      },
      {
        name: 'Liam Morrison',
        playerId: '567114'
      },
      {
        name: 'Gabriel Marusic',
        playerId: '604322'
      },
      {
        name: 'Aleksandar Pavlovic',
        playerId: '792380'
      }
    ]
  })
})

test('Should correctly save all data related to a non active team for the board game', async t => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')
  const TeamProfiles = db.collection('teamProfiles')

  const team = {
    active: false,
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        playerId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        playerId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        playerId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        playerId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        playerId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        playerId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        playerId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        playerId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        playerId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        playerId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        playerId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        playerId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        playerId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        playerId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        playerId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        playerId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        playerId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        playerId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        playerId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        playerId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        playerId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        playerId: '435648'
      }
    ],
    boardPlayers: [
      {
        appearances: 47,
        assists: 11,
        goalContributions: 18,
        goals: 7,
        minutesPlayed: 4051,
        name: 'Joshua Kimmich',
        playerId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        appearances: 38,
        assists: 6,
        goalContributions: 18,
        goals: 12,
        minutesPlayed: 2205,
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        appearances: 35,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2170,
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        appearances: 30,
        assists: 4,
        goalContributions: 21,
        goals: 17,
        minutesPlayed: 1805,
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        appearances: 26,
        assists: 4,
        goalContributions: 5,
        goals: 1,
        minutesPlayed: 1569,
        name: 'Noussair Mazraoui',
        playerId: '340456'
      }
    ],
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 1,
    relevancy: 100,
    season: 2022,
    teamId: '27'
  }
  const { boardTeams, ...teamWithoutBoard } = team

  await saveBoardData({ team })

  t.is(await Teams.countDocuments({}), 1)
  const teamOnDb = await Teams.findOne({}, { projection: { _id: 0 } })
  t.deepEqual(teamOnDb, teamWithoutBoard)

  t.is(await TeamProfiles.countDocuments({}), 1)
  const teamProfileOnDb = await TeamProfiles.findOne({}, { projection: { _id: 0 } })
  t.deepEqual(teamProfileOnDb, {
    seasons: {
      2022: {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    },
    teamId: '27',
    teamNames: [
      'Bayern Munich'
    ],
    totalRelevancy: 100
  })

  t.is(await Players.countDocuments({}), team.allPlayers.length)
  const playerOnDb = await Players.findOne({ playerId: '161056' }, { projection: { _id: 0 } })
  t.deepEqual(playerOnDb, {
    active: true,
    allTeams: [
      {
        league: 'bundesliga',
        name: 'Bayern Munich 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    ],
    name: 'Joshua Kimmich',
    playerId: '161056',
    teamMates: [
      {
        name: 'Matthijs de Ligt',
        playerId: '326031'
      },
      {
        name: 'Dayot Upamecano',
        playerId: '344695'
      },
      {
        name: 'Benjamin Pavard',
        playerId: '353366'
      },
      {
        name: 'Jamal Musiala',
        playerId: '580195'
      },
      {
        name: 'Alphonso Davies',
        playerId: '424204'
      },
      {
        name: 'Leroy Sané',
        playerId: '192565'
      },
      {
        name: 'Serge Gnabry',
        playerId: '159471'
      },
      {
        name: 'Leon Goretzka',
        playerId: '153084'
      },
      {
        name: 'Thomas Müller',
        playerId: '58358'
      },
      {
        name: 'Yann Sommer',
        playerId: '42205'
      },
      {
        name: 'Sadio Mané',
        playerId: '200512'
      },
      {
        name: 'Kingsley Coman',
        playerId: '243714'
      },
      {
        name: 'Eric Maxim Choupo-Moting',
        playerId: '45660'
      },
      {
        name: 'Noussair Mazraoui',
        playerId: '340456'
      },
      {
        name: 'Manuel Neuer',
        playerId: '17259'
      },
      {
        name: 'João Cancelo',
        playerId: '182712'
      },
      {
        name: 'Marcel Sabitzer',
        playerId: '106987'
      },
      {
        name: 'Josip Stanisic',
        playerId: '483046'
      },
      {
        name: 'Ryan Gravenberch',
        playerId: '478573'
      },
      {
        name: 'Lucas Hernández',
        playerId: '281963'
      },
      {
        name: 'Sven Ulreich',
        playerId: '40680'
      },
      {
        name: 'Mathys Tel',
        playerId: '801734'
      },
      {
        name: 'Daley Blind',
        playerId: '12282'
      },
      {
        name: 'Paul Wanner',
        playerId: '900909'
      },
      {
        name: 'Gabriel Vidovic',
        playerId: '604327'
      },
      {
        name: 'Arijon Ibrahimovic',
        playerId: '744728'
      },
      {
        name: 'Bouna Sarr',
        playerId: '190685'
      },
      {
        name: 'Johannes Schenk',
        playerId: '604326'
      },
      {
        name: 'Tanguy Nianzou',
        playerId: '538996'
      },
      {
        name: 'Justin Janitzek',
        playerId: '639580'
      },
      {
        name: 'Liam Morrison',
        playerId: '567114'
      },
      {
        name: 'Gabriel Marusic',
        playerId: '604322'
      },
      {
        name: 'Aleksandar Pavlovic',
        playerId: '792380'
      },
      {
        name: 'Joshua Zirkzee',
        playerId: '435648'
      }
    ]
  })
})

test('Should correctly append all new data on team profiles', async t => {
  const db = await startDb()
  const TeamProfiles = db.collection('teamProfiles')

  const team = {
    active: true,
    allPlayers: [],
    boardPlayers: [],
    league: 'bundesliga',
    name: 'Bayern Munchen 2022/2023',
    position: 1,
    relevancy: 100,
    season: 2022,
    teamId: '27'
  }

  const teamProfile = {
    seasons: {
      2021: {
        league: 'bundesliga',
        name: 'Bayern Munich 2021/2022',
        position: 1,
        relevancy: 100,
        season: 2021,
        teamId: '27'
      }
    },
    teamId: '27',
    teamNames: [
      'Bayern Munich'
    ],
    totalRelevancy: 100
  }
  await TeamProfiles.insertOne(teamProfile)

  await saveBoardData({ team })

  t.is(await TeamProfiles.countDocuments({}), 1)
  const teamProfileOnDb = await TeamProfiles.findOne({}, { projection: { _id: 0 } })
  t.deepEqual(teamProfileOnDb, {
    seasons: {
      2021: {
        league: 'bundesliga',
        name: 'Bayern Munich 2021/2022',
        position: 1,
        relevancy: 100,
        season: 2021,
        teamId: '27'
      },
      2022: {
        league: 'bundesliga',
        name: 'Bayern Munchen 2022/2023',
        position: 1,
        relevancy: 100,
        season: 2022,
        teamId: '27'
      }
    },
    teamId: '27',
    teamNames: [
      'Bayern Munich',
      'Bayern Munchen'
    ],
    totalRelevancy: 200
  })
})

test('Should throw if the team name is not valid', async t => {
  const team = {
    active: true,
    allPlayers: [],
    boardPlayers: [],
    league: 'bundesliga',
    name: 'Invalid name',
    position: 1,
    relevancy: 100,
    season: 2022,
    teamId: '27'
  }

  const error = await t.throwsAsync(saveBoardData({ team }))

  t.is(error.message, 'Name Invalid name is invalid')
})
