import db from '../db/connection.js'
import data from './countries.json' assert { type: 'json' }
import Country from '../models/Country.js'

let countryData = data.map(item => {
  const country = {}

  country.name = item.name.official

  item.capital?
    country.capital = item.capital[0]
    : country.capital = ''

  country.region = item.region
  country.population = item.population

  country.flag = item.flag

  
  for (let language in item.languages) {
    country.primaryLanguage = item.languages[language]
    break
  }

  return country
})

Country
  .deleteMany({})
  .then(() => Country.create(countryData))
  .then(() => console.log('done!'))
  .then(() => db.close())
  .catch(error => console.error('Error', error))