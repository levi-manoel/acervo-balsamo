<template>
  <div>
    <div>
      <el-container class="container">
        <el-header class="header">
          <el-dropdown trigger="click" size="small" class="btn" @command="mudaTom" style="width: 100%;">
            <span class="el-dropdown-link">
              <el-button size="small">
                Tom: {{ tomSelecionado }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
            </span>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="campo of Object.keys(camposHarmonicos)" :command="campo">
                  {{ campo }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>

        <el-main>
          <div v-for="parte of cifraFormatada">
            <div v-for="linha of parte">
              <el-text class="mx-1" style="white-space: pre;" type="primary">{{ linha.acordes }}</el-text>
              <p class="mx-1">{{ linha.letra }}</p>
            </div>
            <br />
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.container {
  display: flex;
  align-items: center;
}
</style>

<script>
export default {
  props: ['musicaProp', 'tomInicial'],

  data() {
    return {
      musica: {},
      cifraFormatada: [],
      tomSelecionado: null,
      camposHarmonicos: {
        'C': { I: 'C', II: 'D', III: 'E', IV: 'F', V: 'G', VI: 'A', VII: 'B' },
        'Db': { I: 'Db', II: 'Eb', III: 'F', IV: 'Gb', V: 'Ab', VI: 'Bb', VII: 'C' },
        'D': { I: 'D', II: 'E', III: 'F#', IV: 'G', V: 'A', VI: 'B', VII: 'C#' },
        'Eb': { I: 'Eb', II: 'F', III: 'G', IV: 'Ab', V: 'Bb', VI: 'C', VII: 'D' },
        'E': { I: 'E', II: 'F#', III: 'G#', IV: 'A', V: 'B', VI: 'C#', VII: 'D#' },
        'F': { I: 'F', II: 'G', III: 'A', IV: 'Bb', V: 'C', VI: 'D', VII: 'Eb' },
        // 'F#': { I: 'F#', II: 'G#', III: 'A#', IV: 'B', V: 'C#', VI: 'D#', VII: 'E#' },
        'Gb': { I: 'Gb', II: 'Ab', III: 'Bb', IV: 'Cb', V: 'Db', VI: 'Eb', VII: 'F' },
        'G': { I: 'G', II: 'A', III: 'B', IV: 'C', V: 'D', VI: 'E', VII: 'F#' },
        'Ab': { I: 'Ab', II: 'Bb', III: 'C', IV: 'Db', V: 'Eb', VI: 'F', VII: 'G' },
        'A': { I: 'A', II: 'B', III: 'C#', IV: 'D', V: 'E', VI: 'F#', VII: 'G#' },
        'Bb': { I: 'Bb', II: 'C', III: 'D', IV: 'Eb', V: 'F', VI: 'G', VII: 'A' },
        'B': { I: 'B', II: 'C#', III: 'D#', IV: 'E', V: 'F#', VI: 'G#', VII: 'A#' },
      }
    }
  },

  watch: {
    musicaProp() {
      this.formataCifra()
    },

    tomSelecionado() {
      this.formataCifra()
    }
  },

  created() {
    this.tomSelecionado = this.tomInicial
    this.formataCifra()
  },

  methods: {
    formataCifra() {
      const cifra = []

      this.musica = { ...this.musicaProp, ...this.musicaProp.cifra }

      for (const parte of this.musica.ordem.split(';')) {
        cifra.push(JSON.parse(JSON.stringify(this.musica.partes[parte])))
      }

      if (this.camposHarmonicos[this.tomSelecionado]) {
        for (const parte of cifra) {
          for (const linha of parte) {
            linha.acordes = this.trocaGrausPorNotas(linha.acordes)
          }
        }
      }

      this.cifraFormatada = cifra
    },

    mudaTom(tom) {
      this.tomSelecionado = tom
    },

    trocaGrausPorNotas(acordes) {
      return acordes
        .replaceAll('(I)', this.camposHarmonicos[this.tomSelecionado]['I'])
        .replaceAll('(II)', this.camposHarmonicos[this.tomSelecionado]['II'])
        .replaceAll('(III)', this.camposHarmonicos[this.tomSelecionado]['III'])
        .replaceAll('(IV)', this.camposHarmonicos[this.tomSelecionado]['IV'])
        .replaceAll('(V)', this.camposHarmonicos[this.tomSelecionado]['V'])
        .replaceAll('(VI)', this.camposHarmonicos[this.tomSelecionado]['VI'])
        .replaceAll('(VII)', this.camposHarmonicos[this.tomSelecionado]['VII'])
    }
  },
}
</script>
