<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main__container">
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
</style>
