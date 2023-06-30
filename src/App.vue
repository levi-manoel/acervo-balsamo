<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main__container">
    <header>
      <h2>Acervo de Músicas</h2>
    </header>

    <main>
      <RouterView />

    </main>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-content: center;
}

header {
  display: flex;
  justify-content: center;
  padding: 3em 0;
}
</style>
