const test = require('ava')
const sinon = require('sinon')
const { scrapeTeam } = require('./scrape-team')

const fetchStub = sinon.stub(global, 'fetch')

const readFile = (filename) => require('fs').readFileSync(require('path').join(__dirname, filename))

test.beforeEach(() => {
  fetchStub.reset()
})

test('Should fetch correctly a team stats page, parse all players', async t => {
  fetchStub.resolves({
    text: async () => readFile('./test-fixtures/team-stats.html')
  })

  const baseTeam = {
    active: true,
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 1,
    season: 2022,
    teamId: '27'
  }

  const team = await scrapeTeam({ baseTeam })
  t.deepEqual(team, {
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
    season: 2022,
    teamId: '27'
  })

  t.is(fetchStub.callCount, 1)
  t.deepEqual(fetchStub.firstCall.args, [
    'https://www.transfermarkt.com/team/leistungsdaten/verein/27/plus/1?reldata=%262022',
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      },
      method: 'GET'
    }
  ])
})
