import musicasJSON from './musicas.json'

async function listar() {
  try {
    return musicasJSON.musicas
    
  } catch (error) {
    console.log(error)
  }
}

async function buscarCifra(id) {
  try {
    const cifraIndisponivel = { ordem: 'A', partes: { A: [{ acordes: '-- cifra indisponível --', letra: '' }] } }

    return musicasJSON.cifras[id] ?? cifraIndisponivel
    
  } catch (error) {
    console.log(error)
  }
}

export default {
  listar,
  buscarCifra,
}
