const { scrapeBoard } = require('../lib/scrape-board')
const { parseStartSeason, parseEndSeason } = require('../lib/utils/parse-input-data')

module.exports = {
  command: 'scrape-board',
  desc: 'Scrapes all leagues until a given season, saving all data for the board game',
  builder: {
    startSeason: {
      required: true,
      alias: 's',
      description: 'Oldest season',
      coerce: parseStartSeason
    },
    endSeason: {
      required: false,
      alias: 'e',
      description: 'Latest season',
      default: 2023,
      coerce: parseEndSeason
    }
  },
  async handler ({ startSeason, endSeason }) {
    const leagues = [
      'Bundesliga',
      'Eredivisie',
      'La Liga',
      'Liga Portugal',
      'Ligue 1',
      'Premier League',
      'Serie A'
    ]

    if (startSeason > endSeason) throw new Error('startSeason can\'t be higher than endSeason')

    const seasons = [...Array(endSeason - startSeason).keys()].map(v => v + startSeason).reverse()

    for (const season of seasons) {
      for (const league of leagues) {
        console.log(`Started scraping league: ${league}, season: ${season}/${season + 1}`)
        await scrapeBoard({ league, season })
        console.log(`Finished scraping all teams from league: ${league}, season: ${season}/${season + 1}`)
      }
    }
    process.exit(0)
  }
}
