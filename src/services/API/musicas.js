import { createClient } from '@supabase/supabase-js'

async function listar() {
  try {

    const supabase = createClient('https://otxkoxaluxpuvdnhskne.supabase.co', import.meta.env.VITE_SUPABASE_KEY || process.env.VITE_SUPABASE_KEY)
    
    const { data: musicas } = await supabase.from('musica').select('*')

    return musicas.map(musica => {
      if (!musica.cifra) {
        musica.cifra = {
          ordem: 'A',
          partes: {
            'A': [{ acordes: ' -- cifra indisponível -- ', letra: '' }]
          }
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
