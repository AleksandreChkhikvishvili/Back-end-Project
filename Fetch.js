import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

fetch('https://restcountries.com/v3.1/all')
    .then(response=> response.json())
    .then(data => fsPromises.writeFile("./countries.json", JSON.stringify(data)))
    .then(console.log("data"))
    .catch( error => console.error( error ) )







