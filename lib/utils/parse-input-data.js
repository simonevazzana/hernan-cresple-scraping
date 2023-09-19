const parseStartSeason = (startSeason) => {
  if (!Number.isFinite(+startSeason)) throw new Error(`startSeason must be a number, found ${startSeason} instead`)

  startSeason = +startSeason
  if (startSeason > 2022) throw new Error(`startSeason in input is in the future: ${startSeason}`)

  return startSeason
}

const parseEndSeason = (endSeason) => {
  if (!Number.isFinite(+endSeason)) throw new Error(`endSeason must be a number, found ${endSeason} instead`)

  endSeason = +endSeason
  if (endSeason > 2023) throw new Error(`endSeason in input is in the future: ${endSeason}`)

  return endSeason
}

module.exports = {
  parseEndSeason,
  parseStartSeason
}
