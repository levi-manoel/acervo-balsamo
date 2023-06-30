import musicasJSON from './musicas.json'

async function listar() {
  try {
    return musicasJSON
    
  } catch (error) {
    console.log(error)
  }
}

export default {
  listar
}
