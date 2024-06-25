<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Primeira Geracao</RouterLink>
        <RouterLink to="/geracao2">SEGUNDA Geracao</RouterLink>
        <RouterLink to="/geracao3">TERCEIRA Geracao</RouterLink>
      </nav>

  <RouterView />
</template>

