<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Barra de Navegação -->
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        |
        <RouterLink to="/sobre">Sobre</RouterLink>
        |
        <RouterLink to="/restrito">Restrito</RouterLink>
      </nav>
  </header>

  <!-- Exibicao das Rotas -->
  <RouterView />
</template>
