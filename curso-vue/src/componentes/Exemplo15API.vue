<!--SCRIPT-->

<script setup>

import { onMounted, ref } from 'vue';

let produtos = ref([]);

onMounted(() => {

    fetch('http://localhost:3000/produtos')
    .then(requisicao => requisicao.json())
    .then(retorno => produtos.value = retorno)

})

</script>

<!--HTML---->

<template>


<!--FORMULARIO-->

    <form >
        <input type="text" placeholder="Produto">
        <input type="number" placeholder="Valor">
        <input type="submit" placeholder="Cadastrar">
    </form>

<!-- TABELA -->

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Selecionar</th>
        </tr>
    </thead>

<tbody>
    <tr v-for="p in produtos">
        <td>{{  p.produto }}</td>
        <td>{{ p.valor }}</td>
        <td><button>SELECIONAR</button></td>
    </tr>
</tbody>


</table>

</template>