const test = require('ava')
const { parseTeam } = require('./parse-team')

const readFile = (filename) => require('fs').readFileSync(require('path').join(__dirname, filename))

test('Should correctly parse a team, keeping only the players that played the most for the board', t => {
  const body = readFile('./test-fixtures/team-stats.html')
  const baseTeam = {
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 1,
    season: 2022,
    teamId: '27'
  }

  const team = parseTeam({ body, baseTeam })

  t.deepEqual(team, {
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        transfermarktId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        transfermarktId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        transfermarktId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        transfermarktId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        transfermarktId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        transfermarktId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        transfermarktId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        transfermarktId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        transfermarktId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        transfermarktId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        transfermarktId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        transfermarktId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        transfermarktId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        transfermarktId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        transfermarktId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        transfermarktId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        transfermarktId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        transfermarktId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        transfermarktId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        transfermarktId: '435648'
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
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        assists: 6,
        goalContributions: 18,
        goals: 12,
        minutesPlayed: 2205,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2170,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        assists: 4,
        goalContributions: 21,
        goals: 17,
        minutesPlayed: 1805,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        assists: 4,
        goalContributions: 5,
        goals: 1,
        minutesPlayed: 1569,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      }
    ],
    ...baseTeam
  })
})

test('Should crop the players for the board, based on the league position of the team', t => {
  const body = readFile('./test-fixtures/team-stats.html')
  const baseTeam = {
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 6,
    season: 2022,
    teamId: '27'
  }

  let team = parseTeam({ body, baseTeam })

  t.deepEqual(team, {
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        transfermarktId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        transfermarktId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        transfermarktId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        transfermarktId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        transfermarktId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        transfermarktId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        transfermarktId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        transfermarktId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        transfermarktId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        transfermarktId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        transfermarktId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        transfermarktId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        transfermarktId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        transfermarktId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        transfermarktId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        transfermarktId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        transfermarktId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        transfermarktId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        transfermarktId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        transfermarktId: '435648'
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
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        assists: 6,
        goalContributions: 18,
        goals: 12,
        minutesPlayed: 2205,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2170,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      }
    ],
    ...baseTeam
  })

  baseTeam.position = 13

  team = parseTeam({ body, baseTeam })

  t.deepEqual(team, {
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        transfermarktId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        transfermarktId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        transfermarktId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        transfermarktId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        transfermarktId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        transfermarktId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        transfermarktId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        transfermarktId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        transfermarktId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        transfermarktId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        transfermarktId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        transfermarktId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        transfermarktId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        transfermarktId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        transfermarktId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        transfermarktId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        transfermarktId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        transfermarktId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        transfermarktId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        transfermarktId: '435648'
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
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      }
    ],
    ...baseTeam
  })
})

test('Should include the player with the most goal contributions, if he hasn\'t played enough minutes to be on the board', t => {
  const body = readFile('./test-fixtures/team-stats-best-player-excluded.html')
  const baseTeam = {
    league: 'bundesliga',
    name: 'Bayern Munich 2022/2023',
    position: 1,
    season: 2022,
    teamId: '27'
  }

  const team = parseTeam({ body, baseTeam })

  t.deepEqual(team, {
    allPlayers: [
      {
        appearances: 47,
        name: 'Joshua Kimmich',
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      },
      {
        appearances: 16,
        name: 'Manuel Neuer',
        transfermarktId: '17259'
      },
      {
        appearances: 21,
        name: 'João Cancelo',
        transfermarktId: '182712'
      },
      {
        appearances: 24,
        name: 'Marcel Sabitzer',
        transfermarktId: '106987'
      },
      {
        appearances: 23,
        name: 'Josip Stanisic',
        transfermarktId: '483046'
      },
      {
        appearances: 33,
        name: 'Ryan Gravenberch',
        transfermarktId: '478573'
      },
      {
        appearances: 11,
        name: 'Lucas Hernández',
        transfermarktId: '281963'
      },
      {
        appearances: 8,
        name: 'Sven Ulreich',
        transfermarktId: '40680'
      },
      {
        appearances: 28,
        name: 'Mathys Tel',
        transfermarktId: '801734'
      },
      {
        appearances: 5,
        name: 'Daley Blind',
        transfermarktId: '12282'
      },
      {
        appearances: 4,
        name: 'Paul Wanner',
        transfermarktId: '900909'
      },
      {
        appearances: 1,
        name: 'Gabriel Vidovic',
        transfermarktId: '604327'
      },
      {
        appearances: 1,
        name: 'Arijon Ibrahimovic',
        transfermarktId: '744728'
      },
      {
        appearances: 1,
        name: 'Bouna Sarr',
        transfermarktId: '190685'
      },
      {
        appearances: 0,
        name: 'Johannes Schenk',
        transfermarktId: '604326'
      },
      {
        appearances: 0,
        name: 'Tanguy Nianzou',
        transfermarktId: '538996'
      },
      {
        appearances: 0,
        name: 'Justin Janitzek',
        transfermarktId: '639580'
      },
      {
        appearances: 0,
        name: 'Liam Morrison',
        transfermarktId: '567114'
      },
      {
        appearances: 0,
        name: 'Gabriel Marusic',
        transfermarktId: '604322'
      },
      {
        appearances: 0,
        name: 'Aleksandar Pavlovic',
        transfermarktId: '792380'
      },
      {
        appearances: 0,
        name: 'Joshua Zirkzee',
        transfermarktId: '435648'
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
        transfermarktId: '161056'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 4,
        goals: 3,
        minutesPlayed: 3390,
        name: 'Matthijs de Ligt',
        transfermarktId: '326031'
      },
      {
        appearances: 43,
        assists: 2,
        goalContributions: 3,
        goals: 1,
        minutesPlayed: 3386,
        name: 'Dayot Upamecano',
        transfermarktId: '344695'
      },
      {
        appearances: 43,
        assists: 1,
        goalContributions: 8,
        goals: 7,
        minutesPlayed: 3371,
        name: 'Benjamin Pavard',
        transfermarktId: '353366'
      },
      {
        appearances: 47,
        assists: 16,
        goalContributions: 32,
        goals: 16,
        minutesPlayed: 3024,
        name: 'Jamal Musiala',
        transfermarktId: '580195'
      },
      {
        appearances: 38,
        assists: 8,
        goalContributions: 11,
        goals: 3,
        minutesPlayed: 2846,
        name: 'Alphonso Davies',
        transfermarktId: '424204'
      },
      {
        appearances: 44,
        assists: 10,
        goalContributions: 24,
        goals: 14,
        minutesPlayed: 2765,
        name: 'Leroy Sané',
        transfermarktId: '192565'
      },
      {
        appearances: 47,
        assists: 12,
        goalContributions: 29,
        goals: 17,
        minutesPlayed: 2572,
        name: 'Serge Gnabry',
        transfermarktId: '159471'
      },
      {
        appearances: 40,
        assists: 6,
        goalContributions: 12,
        goals: 6,
        minutesPlayed: 2553,
        name: 'Leon Goretzka',
        transfermarktId: '153084'
      },
      {
        appearances: 40,
        assists: 12,
        goalContributions: 20,
        goals: 8,
        minutesPlayed: 2331,
        name: 'Thomas Müller',
        transfermarktId: '58358'
      },
      {
        appearances: 25,
        assists: 0,
        goalContributions: 0,
        goals: 0,
        minutesPlayed: 2250,
        name: 'Yann Sommer',
        transfermarktId: '42205'
      },
      {
        appearances: 38,
        assists: 6,
        goalContributions: 18,
        goals: 12,
        minutesPlayed: 2205,
        name: 'Sadio Mané',
        transfermarktId: '200512'
      },
      {
        appearances: 35,
        assists: 7,
        goalContributions: 16,
        goals: 9,
        minutesPlayed: 2170,
        name: 'Kingsley Coman',
        transfermarktId: '243714'
      },
      {
        appearances: 30,
        assists: 4,
        goalContributions: 21,
        goals: 17,
        minutesPlayed: 1805,
        name: 'Eric Maxim Choupo-Moting',
        transfermarktId: '45660'
      },
      {
        appearances: 26,
        assists: 4,
        goalContributions: 5,
        goals: 1,
        minutesPlayed: 1569,
        name: 'Noussair Mazraoui',
        transfermarktId: '340456'
      },
      {
        appearances: 21,
        assists: 26,
        goalContributions: 41,
        goals: 15,
        minutesPlayed: 1295,
        name: 'João Cancelo',
        transfermarktId: '182712'
      }
    ],
    ...baseTeam
  })
})
