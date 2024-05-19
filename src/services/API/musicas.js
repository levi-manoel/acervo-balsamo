import jsonMusics from './musicas.json'

async function listar() {
  try {
    return jsonMusics.musicas.map(musica => {
      musica.cifra = jsonMusics.cifras[musica.id] ? jsonMusics.cifras[musica.id] : {
        ordem: 'A',
        partes: {
          'A': [{ acordes: ' -- cifra indisponível -- ', letra: '' }]
        }
      }

      return musica
    })

  } catch (error) {
    console.log(error)
  }
}

export default {
  listar,
}
