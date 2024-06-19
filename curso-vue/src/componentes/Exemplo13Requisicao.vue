<!-- SCRIPT -->
<script setup>

    // Importar REF
    import { onMounted, ref } from 'vue';

    // Vetor dinâmico
    let vetor = ref([]);

    // Requisição
    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(requisicao => requisicao.json())
        .then(postagens => vetor = postagens);
    });

</script>

<!-- HTML -->
<template>
    <h1>Requisições</h1>

    <table>
        <tr v-for="v of vetor">
            <td>{{ v.id }}</td>
            <td>{{ v.title }}</td>
            <td>{{ v.body }}</td>
        </tr>
    </table>

    <h1>oi</h1>
</template>