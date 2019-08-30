const express = require('express')
const app = express()
const readXlsxFile = require('read-excel-file/node')
const _ = require('lodash')
const moment = require('moment')
const schema = require('./models/voltas')

let pilotos = []

  async function lerArquivo() {
      return await readXlsxFile('./planilha/corrida.xlsx', { schema })
  }

  async function handlePilotos() {
      var corrida = await lerArquivo();

      _.forEach(corrida.rows, (value, index) => {
          var codigoPiloto = String(value.piloto.split(" – ")[0])
          var nomePiloto = value.piloto.split(" – ")[1]
        
        var pilotoEncontrado = _.find(pilotos, (value) =>  { return value.codigoPiloto === codigoPiloto})

        if (pilotoEncontrado) {
            pilotoEncontrado.qteVolta += 1
            pilotoEncontrado.voltas.push({
                NVolta: value.NVolta,
                tempoVolta: value.tempoVolta,
                velocidadeMediaVolta: value.VMedia
            })
        } else {
            pilotos.push({
                codigoPiloto,
                nomePiloto,
                qteVolta: 1,
                voltas: [{
                    NVolta: value.NVolta,
                    tempoVolta: value.tempoVolta,
                    velocidadeMediaVolta: value.VMedia
                }]
            })
        }

      })

      //console.log(pilotos)
      await handleVoltas()
  }

  async function handleVoltas() {
    _.forEach(pilotos, (piloto) => {
        var voltas = _.orderBy(piloto.voltas, ['tempoVolta'], ['asc'])

        piloto.melhorVolta = voltas[0].tempoVolta
    })
  }


const server = app.listen(process.env.PORT || 3000, async () => {
    await handlePilotos()
    console.log(`Server listening on port ${server.address().port}`)
    console.table(pilotos)
})