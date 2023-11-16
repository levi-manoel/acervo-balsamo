import API from '../../services/API'
import cifra from './Components/Cifra.vue'

export default {
  components: {
    'cifra': cifra
  },
  data() {
    return {
      telaPequena: false,
      musicas: [],
      coresTags: {
        'Tá pegada': 'success',
        'Em progresso': 'warning',
        'Pra pegar': 'info'
      },

      filtros: {
        texto: '',
        status: [],
        cantor: []
      },

      carregandoMusicas: true,
      musicaSelecionada: null,
      mostraMaisInformacoes: false
    }
  },

  async created() {
    await this.carregaLista()

    if (screen.width < 720) {
      this.telaPequena = true
    }
  },

  methods: {
    async carregaLista() {
      const musicas = await API.musicas.listar()

      this.musicas = musicas
      this.carregandoMusicas = false
    }
  },

  computed: {
    musicasFiltradas() {
      return this.musicas.filter(musica => {
        const filtroTexto = String(musica.nome + musica.trecho).toLowerCase().includes(String(this.filtros.texto).toLowerCase())
        const filtroStatus = this.filtros.status.length !== 0 ? this.filtros.status.includes(musica.status) : true
        const filtroCantor = this.filtros.cantor.length !== 0 ? this.filtros.cantor.includes(musica.cantor) : true

        return filtroTexto && filtroStatus && filtroCantor
      })
    }
  }
}
