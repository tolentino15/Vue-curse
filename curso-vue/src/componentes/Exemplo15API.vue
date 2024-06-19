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
        <td></td>
    </tr>
</tbody>


</table>

</template>