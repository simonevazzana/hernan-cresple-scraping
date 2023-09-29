const test = require('ava')
const sinon = require('sinon')
const { startDb } = require('./db')
const { scrapeBoard } = require('./scrape-board')

const readFile = (filename) => require('fs').readFileSync(require('path').join(__dirname, filename))

const fetchStub = sinon.stub(global, 'fetch')

test.beforeEach(async () => {
  fetchStub.reset()

  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')

  await Players.deleteMany({})
  await Teams.deleteMany({})
})

test('Should throw with an unsupported league', async t => {
  const league = 'unknownleague'
  const season = 2020

  const error = await t.throwsAsync(scrapeBoard({ league, season }))

  t.is(error.message, 'Found unsupported league: unknownleague')
})

test('Should correctly scrape an entire board', async t => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')

  fetchStub
    .onCall(0)
    .resolves({ text: async () => readFile('./test-fixtures/league-table-reduced.html') })
    .onCall(1)
    .resolves({ text: async () => readFile('./test-fixtures/team-stats.html') })
    .onCall(2)
    .resolves({ text: async () => readFile('./test-fixtures/team-stats-2.html') })
    .onCall(3)
    .resolves({ text: async () => readFile('./test-fixtures/team-stats-3.html') })

  const league = 'bundesliga'
  const season = 2022

  await scrapeBoard({ league, season })

  t.is(await Teams.countDocuments({}), 3)

  const firstTeam = await Teams.findOne({ teamId: '27' }, { projection: { _id: 0 } })
  t.deepEqual(firstTeam, {
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
  })

  const secondTeam = await Teams.findOne({ teamId: '16' }, { projection: { _id: 0 } })
  t.deepEqual(secondTeam, {
    active: true,
    allPlayers: [
      {
        appearances: 42,
        name: 'Jude Bellingham',
        playerId: '581678'
      },
      {
        appearances: 35,
        name: 'Gregor Kobel',
        playerId: '257814'
      },
      {
        appearances: 41,
        name: 'Niklas Süle',
        playerId: '166601'
      },
      {
        appearances: 42,
        name: 'Julian Brandt',
        playerId: '187492'
      },
      {
        appearances: 36,
        name: 'Raphaël Guerreiro',
        playerId: '170986'
      },
      {
        appearances: 39,
        name: 'Nico Schlotterbeck',
        playerId: '388198'
      },
      {
        appearances: 38,
        name: 'Emre Can',
        playerId: '119296'
      },
      {
        appearances: 38,
        name: 'Mats Hummels',
        playerId: '39728'
      },
      {
        appearances: 36,
        name: 'Salih Özcan',
        playerId: '244940'
      },
      {
        appearances: 35,
        name: 'Donyell Malen',
        playerId: '326029'
      },
      {
        appearances: 32,
        name: 'Karim Adeyemi',
        playerId: '496094'
      },
      {
        appearances: 32,
        name: 'Marius Wolf',
        playerId: '193900'
      },
      {
        appearances: 31,
        name: 'Marco Reus',
        playerId: '35207'
      },
      {
        appearances: 20,
        name: 'Julian Ryerson',
        playerId: '370789'
      },
      {
        appearances: 35,
        name: 'Youssoufa Moukoko',
        playerId: '467720'
      },
      {
        appearances: 22,
        name: 'Sébastien Haller',
        playerId: '181375'
      },
      {
        appearances: 28,
        name: 'Anthony Modeste',
        playerId: '50512'
      },
      {
        appearances: 16,
        name: 'Thomas Meunier',
        playerId: '100986'
      },
      {
        appearances: 12,
        name: 'Alexander Meyer',
        playerId: '76158'
      },
      {
        appearances: 30,
        name: 'Giovanni Reyna',
        playerId: '504215'
      },
      {
        appearances: 21,
        name: 'Thorgan Hazard',
        playerId: '102226'
      },
      {
        appearances: 20,
        name: 'Jamie Bynoe-Gittens',
        playerId: '670882'
      },
      {
        appearances: 10,
        name: 'Mahmoud Dahoud',
        playerId: '191422'
      },
      {
        appearances: 5,
        name: 'Felix Passlack',
        playerId: '274461'
      },
      {
        appearances: 5,
        name: 'Tom Rothe',
        playerId: '798043'
      },
      {
        appearances: 2,
        name: 'Soumaïla Coulibaly',
        playerId: '659513'
      },
      {
        appearances: 1,
        name: 'Julien Duranville',
        playerId: '819215'
      },
      {
        appearances: 1,
        name: 'Justin Njinmah',
        playerId: '596153'
      },
      {
        appearances: 3,
        name: 'Antonios Papadopoulos',
        playerId: '482573'
      },
      {
        appearances: 1,
        name: 'Marco Pasalic',
        playerId: '395928'
      },
      {
        appearances: 0,
        name: 'Marcel Lotka',
        playerId: '453737'
      },
      {
        appearances: 0,
        name: 'Luca Unbehaun',
        playerId: '388815'
      },
      {
        appearances: 0,
        name: 'Silas Ostrzinski',
        playerId: '684116'
      },
      {
        appearances: 0,
        name: 'Mateu Morey',
        playerId: '388513'
      },
      {
        appearances: 0,
        name: 'Nico Schulz',
        playerId: '85867'
      },
      {
        appearances: 0,
        name: 'Abdoulaye Kamara',
        playerId: '718232'
      },
      {
        appearances: 0,
        name: 'Göktan Gürpüz',
        playerId: '655912'
      }
    ],
    boardPlayers: [
      {
        appearances: 42,
        assists: 7,
        goalContributions: 21,
        goals: 14,
        minutesPlayed: 3557,
        name: 'Jude Bellingham',
        playerId: '581678'
      },
      {
        appearances: 35,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 3105,
        name: 'Gregor Kobel',
        playerId: '257814'
      },
      {
        appearances: 41,
        assists: 4,
        goalContributions: 6,
        goals: 2,
        minutesPlayed: 3105,
        name: 'Niklas Süle',
        playerId: '166601'
      },
      {
        appearances: 42,
        assists: 9,
        goalContributions: 19,
        goals: 10,
        minutesPlayed: 3103,
        name: 'Julian Brandt',
        playerId: '187492'
      },
      {
        appearances: 36,
        assists: 14,
        goalContributions: 20,
        goals: 6,
        minutesPlayed: 3046,
        name: 'Raphaël Guerreiro',
        playerId: '170986'
      },
      {
        appearances: 39,
        assists: 5,
        goalContributions: 9,
        goals: 4,
        minutesPlayed: 3034,
        name: 'Nico Schlotterbeck',
        playerId: '388198'
      },
      {
        appearances: 38,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 2737,
        name: 'Emre Can',
        playerId: '119296'
      },
      {
        appearances: 38,
        assists: 0,
        goalContributions: 1,
        goals: 1,
        minutesPlayed: 2580,
        name: 'Mats Hummels',
        playerId: '39728'
      },
      {
        appearances: 36,
        assists: 2,
        goalContributions: 2,
        goals: 0,
        minutesPlayed: 2390,
        name: 'Salih Özcan',
        playerId: '244940'
      },
      {
        appearances: 35,
        assists: 8,
        goalContributions: 18,
        goals: 10,
        minutesPlayed: 2191,
        name: 'Donyell Malen',
        playerId: '326029'
      },
      {
        appearances: 32,
        assists: 6,
        goalContributions: 15,
        goals: 9,
        minutesPlayed: 1870,
        name: 'Karim Adeyemi',
        playerId: '496094'
      },
      {
        appearances: 32,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 1851,
        name: 'Marius Wolf',
        playerId: '193900'
      },
      {
        appearances: 31,
        assists: 8,
        goalContributions: 16,
        goals: 8,
        minutesPlayed: 1806,
        name: 'Marco Reus',
        playerId: '35207'
      },
      {
        appearances: 20,
        assists: 1,
        goalContributions: 2,
        goals: 1,
        minutesPlayed: 1613,
        name: 'Julian Ryerson',
        playerId: '370789'
      },
      {
        appearances: 35,
        assists: 6,
        goalContributions: 13,
        goals: 7,
        minutesPlayed: 1597,
        name: 'Youssoufa Moukoko',
        playerId: '467720'
      }
    ],
    league: 'bundesliga',
    name: 'Borussia Dortmund 2022/2023',
    position: 2,
    relevancy: 96,
    season: 2022,
    teamId: '16'
  })

  const thirdTeam = await Teams.findOne({ teamId: '23826' }, { projection: { _id: 0 } })
  t.deepEqual(thirdTeam, {
    active: true,
    allPlayers: [
      {
        appearances: 48,
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        appearances: 46,
        name: 'Dominik Szoboszlai',
        playerId: '451276'
      },
      {
        appearances: 37,
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        appearances: 41,
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        appearances: 44,
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        appearances: 40,
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        appearances: 36,
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        appearances: 44,
        name: 'André Silva',
        playerId: '198008'
      },
      {
        appearances: 40,
        name: 'David Raum',
        playerId: '318204'
      },
      {
        appearances: 37,
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        appearances: 33,
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        appearances: 43,
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        appearances: 29,
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        appearances: 44,
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        appearances: 40,
        name: 'Marcel Halstenberg',
        playerId: '70243'
      },
      {
        appearances: 40,
        name: 'Kevin Kampl',
        playerId: '53418'
      },
      {
        appearances: 31,
        name: 'Dani Olmo',
        playerId: '293385'
      },
      {
        appearances: 22,
        name: 'Lukas Klostermann',
        playerId: '215599'
      },
      {
        appearances: 10,
        name: 'Péter Gulácsi',
        playerId: '57071'
      },
      {
        appearances: 15,
        name: 'Abdou Diallo',
        playerId: '229005'
      },
      {
        appearances: 28,
        name: 'Yussuf Poulsen',
        playerId: '157635'
      },
      {
        appearances: 3,
        name: 'Ørjan Nyland',
        playerId: '73517'
      },
      {
        appearances: 11,
        name: 'Hugo Novoa',
        playerId: '668276'
      },
      {
        appearances: 3,
        name: 'Sanoussy Ba',
        playerId: '717346'
      },
      {
        appearances: 0,
        name: 'Oskar Preil',
        playerId: '710045'
      },
      {
        appearances: 0,
        name: 'Jonas Nickisch',
        playerId: '665971'
      },
      {
        appearances: 0,
        name: 'Timo Schlieck',
        playerId: '897425'
      },
      {
        appearances: 0,
        name: 'Caden Clark',
        playerId: '742297'
      }
    ],
    boardPlayers: [
      {
        appearances: 48,
        assists: 0,
        goalContributions: 5,
        goals: 5,
        minutesPlayed: 4256,
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        appearances: 46,
        assists: 13,
        goalContributions: 23,
        goals: 10,
        minutesPlayed: 3708,
        name: 'Dominik Szoboszlai',
        playerId: '451276'
      },
      {
        appearances: 37,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 3317,
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        appearances: 41,
        assists: 0,
        goalContributions: 3,
        goals: 3,
        minutesPlayed: 3002,
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        appearances: 44,
        assists: 3,
        goalContributions: 7,
        goals: 4,
        minutesPlayed: 2911,
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 22,
        goals: 16,
        minutesPlayed: 2819,
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        appearances: 36,
        assists: 9,
        goalContributions: 32,
        goals: 23,
        minutesPlayed: 2732,
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        appearances: 44,
        assists: 9,
        goalContributions: 18,
        goals: 9,
        minutesPlayed: 2582,
        name: 'André Silva',
        playerId: '198008'
      },
      {
        appearances: 40,
        assists: 2,
        goalContributions: 2,
        goals: 0,
        minutesPlayed: 2482,
        name: 'David Raum',
        playerId: '318204'
      },
      {
        appearances: 37,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2379,
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        appearances: 33,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 2288,
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        appearances: 43,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2201,
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        appearances: 29,
        assists: 1,
        goalContributions: 5,
        goals: 4,
        minutesPlayed: 2181,
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        appearances: 44,
        assists: 2,
        goalContributions: 4,
        goals: 2,
        minutesPlayed: 2096,
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        appearances: 40,
        assists: 4,
        goalContributions: 6,
        goals: 2,
        minutesPlayed: 2052,
        name: 'Marcel Halstenberg',
        playerId: '70243'
      }
    ],
    league: 'bundesliga',
    name: 'RB Leipzig 2022/2023',
    position: 3,
    relevancy: 92,
    season: 2022,
    teamId: '23826'
  })

  t.is(await Players.countDocuments({}), 100)
  const playerOnThirdTeam = await Players.findOne({ playerId: '451276' }, { projection: { _id: 0 } })
  t.deepEqual(playerOnThirdTeam, {
    active: true,
    allTeams: [
      {
        league: 'bundesliga',
        name: 'RB Leipzig 2022/2023',
        position: 3,
        relevancy: 92,
        season: 2022,
        teamId: '23826'
      }
    ],
    boardTeams: [
      {
        league: 'bundesliga',
        name: 'RB Leipzig 2022/2023',
        position: 3,
        relevancy: 92,
        season: 2022,
        teamId: '23826'
      }
    ],
    name: 'Dominik Szoboszlai',
    playerId: '451276',
    teamMates: [
      {
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        name: 'André Silva',
        playerId: '198008'
      },
      {
        name: 'David Raum',
        playerId: '318204'
      },
      {
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        name: 'Marcel Halstenberg',
        playerId: '70243'
      },
      {
        name: 'Kevin Kampl',
        playerId: '53418'
      },
      {
        name: 'Dani Olmo',
        playerId: '293385'
      },
      {
        name: 'Lukas Klostermann',
        playerId: '215599'
      },
      {
        name: 'Péter Gulácsi',
        playerId: '57071'
      },
      {
        name: 'Abdou Diallo',
        playerId: '229005'
      },
      {
        name: 'Yussuf Poulsen',
        playerId: '157635'
      },
      {
        name: 'Ørjan Nyland',
        playerId: '73517'
      },
      {
        name: 'Hugo Novoa',
        playerId: '668276'
      },
      {
        name: 'Sanoussy Ba',
        playerId: '717346'
      },
      {
        name: 'Oskar Preil',
        playerId: '710045'
      },
      {
        name: 'Jonas Nickisch',
        playerId: '665971'
      },
      {
        name: 'Timo Schlieck',
        playerId: '897425'
      },
      {
        name: 'Caden Clark',
        playerId: '742297'
      }
    ]
  })

  t.is(fetchStub.callCount, 4)
  t.deepEqual(fetchStub.args[0], [
    'https://www.transfermarkt.com/league/tabelle/wettbewerb/L1/saison_id/2022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[1], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/27/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[2], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/16/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[3], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/23826/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
})

test.skip('UAT - Should correctly scrape data related to the 2022 bundesliga season', async t => {
  const db = await startDb()
  const Players = db.collection('players')
  const Teams = db.collection('teams')

  fetchStub
    .onFirstCall()
    .resolves({ text: async () => readFile('./test-fixtures/league-table-reduced.html') })
    .callThrough()

  const league = 'bundesliga'
  const season = 2022

  await scrapeBoard({ league, season })

  t.is(await Teams.countDocuments({}), 3)

  const firstTeam = await Teams.findOne({ teamId: '27' }, { projection: { _id: 0 } })
  t.deepEqual(firstTeam, {
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
  })

  const secondTeam = await Teams.findOne({ teamId: '16' }, { projection: { _id: 0 } })
  t.deepEqual(secondTeam, {
    active: true,
    allPlayers: [
      {
        appearances: 42,
        name: 'Jude Bellingham',
        playerId: '581678'
      },
      {
        appearances: 35,
        name: 'Gregor Kobel',
        playerId: '257814'
      },
      {
        appearances: 41,
        name: 'Niklas Süle',
        playerId: '166601'
      },
      {
        appearances: 42,
        name: 'Julian Brandt',
        playerId: '187492'
      },
      {
        appearances: 36,
        name: 'Raphaël Guerreiro',
        playerId: '170986'
      },
      {
        appearances: 39,
        name: 'Nico Schlotterbeck',
        playerId: '388198'
      },
      {
        appearances: 38,
        name: 'Emre Can',
        playerId: '119296'
      },
      {
        appearances: 38,
        name: 'Mats Hummels',
        playerId: '39728'
      },
      {
        appearances: 36,
        name: 'Salih Özcan',
        playerId: '244940'
      },
      {
        appearances: 35,
        name: 'Donyell Malen',
        playerId: '326029'
      },
      {
        appearances: 32,
        name: 'Karim Adeyemi',
        playerId: '496094'
      },
      {
        appearances: 32,
        name: 'Marius Wolf',
        playerId: '193900'
      },
      {
        appearances: 31,
        name: 'Marco Reus',
        playerId: '35207'
      },
      {
        appearances: 20,
        name: 'Julian Ryerson',
        playerId: '370789'
      },
      {
        appearances: 35,
        name: 'Youssoufa Moukoko',
        playerId: '467720'
      },
      {
        appearances: 22,
        name: 'Sébastien Haller',
        playerId: '181375'
      },
      {
        appearances: 28,
        name: 'Anthony Modeste',
        playerId: '50512'
      },
      {
        appearances: 16,
        name: 'Thomas Meunier',
        playerId: '100986'
      },
      {
        appearances: 12,
        name: 'Alexander Meyer',
        playerId: '76158'
      },
      {
        appearances: 30,
        name: 'Giovanni Reyna',
        playerId: '504215'
      },
      {
        appearances: 21,
        name: 'Thorgan Hazard',
        playerId: '102226'
      },
      {
        appearances: 20,
        name: 'Jamie Bynoe-Gittens',
        playerId: '670882'
      },
      {
        appearances: 10,
        name: 'Mahmoud Dahoud',
        playerId: '191422'
      },
      {
        appearances: 5,
        name: 'Felix Passlack',
        playerId: '274461'
      },
      {
        appearances: 5,
        name: 'Tom Rothe',
        playerId: '798043'
      },
      {
        appearances: 2,
        name: 'Soumaïla Coulibaly',
        playerId: '659513'
      },
      {
        appearances: 1,
        name: 'Julien Duranville',
        playerId: '819215'
      },
      {
        appearances: 1,
        name: 'Justin Njinmah',
        playerId: '596153'
      },
      {
        appearances: 3,
        name: 'Antonios Papadopoulos',
        playerId: '482573'
      },
      {
        appearances: 1,
        name: 'Marco Pasalic',
        playerId: '395928'
      },
      {
        appearances: 0,
        name: 'Marcel Lotka',
        playerId: '453737'
      },
      {
        appearances: 0,
        name: 'Luca Unbehaun',
        playerId: '388815'
      },
      {
        appearances: 0,
        name: 'Silas Ostrzinski',
        playerId: '684116'
      },
      {
        appearances: 0,
        name: 'Mateu Morey',
        playerId: '388513'
      },
      {
        appearances: 0,
        name: 'Nico Schulz',
        playerId: '85867'
      },
      {
        appearances: 0,
        name: 'Abdoulaye Kamara',
        playerId: '718232'
      },
      {
        appearances: 0,
        name: 'Göktan Gürpüz',
        playerId: '655912'
      }
    ],
    boardPlayers: [
      {
        appearances: 42,
        assists: 7,
        goalContributions: 21,
        goals: 14,
        minutesPlayed: 3557,
        name: 'Jude Bellingham',
        playerId: '581678'
      },
      {
        appearances: 35,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 3105,
        name: 'Gregor Kobel',
        playerId: '257814'
      },
      {
        appearances: 41,
        assists: 4,
        goalContributions: 6,
        goals: 2,
        minutesPlayed: 3105,
        name: 'Niklas Süle',
        playerId: '166601'
      },
      {
        appearances: 42,
        assists: 9,
        goalContributions: 19,
        goals: 10,
        minutesPlayed: 3103,
        name: 'Julian Brandt',
        playerId: '187492'
      },
      {
        appearances: 36,
        assists: 14,
        goalContributions: 20,
        goals: 6,
        minutesPlayed: 3046,
        name: 'Raphaël Guerreiro',
        playerId: '170986'
      },
      {
        appearances: 39,
        assists: 5,
        goalContributions: 9,
        goals: 4,
        minutesPlayed: 3034,
        name: 'Nico Schlotterbeck',
        playerId: '388198'
      },
      {
        appearances: 38,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 2737,
        name: 'Emre Can',
        playerId: '119296'
      },
      {
        appearances: 38,
        assists: 0,
        goalContributions: 1,
        goals: 1,
        minutesPlayed: 2580,
        name: 'Mats Hummels',
        playerId: '39728'
      },
      {
        appearances: 36,
        assists: 2,
        goalContributions: 2,
        goals: 0,
        minutesPlayed: 2390,
        name: 'Salih Özcan',
        playerId: '244940'
      },
      {
        appearances: 35,
        assists: 8,
        goalContributions: 18,
        goals: 10,
        minutesPlayed: 2191,
        name: 'Donyell Malen',
        playerId: '326029'
      },
      {
        appearances: 32,
        assists: 6,
        goalContributions: 15,
        goals: 9,
        minutesPlayed: 1870,
        name: 'Karim Adeyemi',
        playerId: '496094'
      },
      {
        appearances: 32,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 1851,
        name: 'Marius Wolf',
        playerId: '193900'
      },
      {
        appearances: 31,
        assists: 8,
        goalContributions: 16,
        goals: 8,
        minutesPlayed: 1806,
        name: 'Marco Reus',
        playerId: '35207'
      },
      {
        appearances: 20,
        assists: 1,
        goalContributions: 2,
        goals: 1,
        minutesPlayed: 1613,
        name: 'Julian Ryerson',
        playerId: '370789'
      },
      {
        appearances: 35,
        assists: 6,
        goalContributions: 13,
        goals: 7,
        minutesPlayed: 1597,
        name: 'Youssoufa Moukoko',
        playerId: '467720'
      }
    ],
    league: 'bundesliga',
    name: 'Borussia Dortmund 2022/2023',
    position: 2,
    relevancy: 96,
    season: 2022,
    teamId: '16'
  })

  const thirdTeam = await Teams.findOne({ teamId: '23826' }, { projection: { _id: 0 } })
  t.deepEqual(thirdTeam, {
    active: true,
    allPlayers: [
      {
        appearances: 48,
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        appearances: 46,
        name: 'Dominik Szoboszlai',
        playerId: '451276'
      },
      {
        appearances: 37,
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        appearances: 41,
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        appearances: 44,
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        appearances: 40,
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        appearances: 36,
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        appearances: 44,
        name: 'André Silva',
        playerId: '198008'
      },
      {
        appearances: 40,
        name: 'David Raum',
        playerId: '318204'
      },
      {
        appearances: 37,
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        appearances: 33,
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        appearances: 43,
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        appearances: 29,
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        appearances: 44,
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        appearances: 40,
        name: 'Marcel Halstenberg',
        playerId: '70243'
      },
      {
        appearances: 40,
        name: 'Kevin Kampl',
        playerId: '53418'
      },
      {
        appearances: 31,
        name: 'Dani Olmo',
        playerId: '293385'
      },
      {
        appearances: 22,
        name: 'Lukas Klostermann',
        playerId: '215599'
      },
      {
        appearances: 10,
        name: 'Péter Gulácsi',
        playerId: '57071'
      },
      {
        appearances: 15,
        name: 'Abdou Diallo',
        playerId: '229005'
      },
      {
        appearances: 28,
        name: 'Yussuf Poulsen',
        playerId: '157635'
      },
      {
        appearances: 3,
        name: 'Ørjan Nyland',
        playerId: '73517'
      },
      {
        appearances: 11,
        name: 'Hugo Novoa',
        playerId: '668276'
      },
      {
        appearances: 3,
        name: 'Sanoussy Ba',
        playerId: '717346'
      },
      {
        appearances: 1,
        name: 'Alexander Sørloth',
        playerId: '238407'
      },
      {
        appearances: 0,
        name: 'Oskar Preil',
        playerId: '710045'
      },
      {
        appearances: 0,
        name: 'Jonas Nickisch',
        playerId: '665971'
      },
      {
        appearances: 0,
        name: 'Timo Schlieck',
        playerId: '897425'
      },
      {
        appearances: 0,
        name: 'Caden Clark',
        playerId: '742297'
      }
    ],
    boardPlayers: [
      {
        appearances: 48,
        assists: 0,
        goalContributions: 5,
        goals: 5,
        minutesPlayed: 4256,
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        appearances: 46,
        assists: 13,
        goalContributions: 23,
        goals: 10,
        minutesPlayed: 3708,
        name: 'Dominik Szoboszlai',
        playerId: '451276'
      },
      {
        appearances: 37,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 3317,
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        appearances: 41,
        assists: 0,
        goalContributions: 3,
        goals: 3,
        minutesPlayed: 3002,
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        appearances: 44,
        assists: 3,
        goalContributions: 7,
        goals: 4,
        minutesPlayed: 2911,
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 22,
        goals: 16,
        minutesPlayed: 2819,
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        appearances: 36,
        assists: 9,
        goalContributions: 32,
        goals: 23,
        minutesPlayed: 2732,
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        appearances: 44,
        assists: 9,
        goalContributions: 18,
        goals: 9,
        minutesPlayed: 2582,
        name: 'André Silva',
        playerId: '198008'
      },
      {
        appearances: 40,
        assists: 2,
        goalContributions: 2,
        goals: 0,
        minutesPlayed: 2482,
        name: 'David Raum',
        playerId: '318204'
      },
      {
        appearances: 37,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2379,
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        appearances: 33,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 2288,
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        appearances: 43,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2201,
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        appearances: 29,
        assists: 1,
        goalContributions: 5,
        goals: 4,
        minutesPlayed: 2181,
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        appearances: 44,
        assists: 2,
        goalContributions: 4,
        goals: 2,
        minutesPlayed: 2096,
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        appearances: 40,
        assists: 4,
        goalContributions: 6,
        goals: 2,
        minutesPlayed: 2052,
        name: 'Marcel Halstenberg',
        playerId: '70243'
      }
    ],
    league: 'bundesliga',
    name: 'RB Leipzig 2022/2023',
    position: 3,
    relevancy: 92,
    season: 2022,
    teamId: '23826'
  })

  t.is(await Players.countDocuments({}), 101)
  const playerOnThirdTeam = await Players.findOne({ playerId: '451276' }, { projection: { _id: 0 } })
  t.deepEqual(playerOnThirdTeam, {
    active: true,
    allTeams: [
      {
        league: 'bundesliga',
        name: 'RB Leipzig 2022/2023',
        position: 3,
        relevancy: 92,
        season: 2022,
        teamId: '23826'
      }
    ],
    boardTeams: [
      {
        league: 'bundesliga',
        name: 'RB Leipzig 2022/2023',
        position: 3,
        relevancy: 92,
        season: 2022,
        teamId: '23826'
      }
    ],
    name: 'Dominik Szoboszlai',
    playerId: '451276',
    teamMates: [
      {
        name: 'Willi Orbán',
        playerId: '93740'
      },
      {
        name: 'Janis Blaswich',
        playerId: '81173'
      },
      {
        name: 'Josko Gvardiol',
        playerId: '475959'
      },
      {
        name: 'Benjamin Henrichs',
        playerId: '202591'
      },
      {
        name: 'Timo Werner',
        playerId: '170527'
      },
      {
        name: 'Christopher Nkunku',
        playerId: '344381'
      },
      {
        name: 'André Silva',
        playerId: '198008'
      },
      {
        name: 'David Raum',
        playerId: '318204'
      },
      {
        name: 'Mohamed Simakan',
        playerId: '666234'
      },
      {
        name: 'Xaver Schlager',
        playerId: '223979'
      },
      {
        name: 'Emil Forsberg',
        playerId: '111078'
      },
      {
        name: 'Konrad Laimer',
        playerId: '223967'
      },
      {
        name: 'Amadou Haidara',
        playerId: '402008'
      },
      {
        name: 'Marcel Halstenberg',
        playerId: '70243'
      },
      {
        name: 'Kevin Kampl',
        playerId: '53418'
      },
      {
        name: 'Dani Olmo',
        playerId: '293385'
      },
      {
        name: 'Lukas Klostermann',
        playerId: '215599'
      },
      {
        name: 'Péter Gulácsi',
        playerId: '57071'
      },
      {
        name: 'Abdou Diallo',
        playerId: '229005'
      },
      {
        name: 'Yussuf Poulsen',
        playerId: '157635'
      },
      {
        name: 'Ørjan Nyland',
        playerId: '73517'
      },
      {
        name: 'Hugo Novoa',
        playerId: '668276'
      },
      {
        name: 'Sanoussy Ba',
        playerId: '717346'
      },
      {
        name: 'Alexander Sørloth',
        playerId: '238407'
      },
      {
        name: 'Oskar Preil',
        playerId: '710045'
      },
      {
        name: 'Jonas Nickisch',
        playerId: '665971'
      },
      {
        name: 'Timo Schlieck',
        playerId: '897425'
      },
      {
        name: 'Caden Clark',
        playerId: '742297'
      }
    ]
  })

  t.is(fetchStub.callCount, 4)
  t.deepEqual(fetchStub.args[0], [
    'https://www.transfermarkt.com/league/tabelle/wettbewerb/L1/saison_id/2022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[1], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/27/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[2], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/16/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
  t.deepEqual(fetchStub.args[3], [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/23826/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
})
