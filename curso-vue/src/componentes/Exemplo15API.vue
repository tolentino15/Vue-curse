<!--SCRIPT-->

<script setup>

import { onMounted, ref } from 'vue';

let produtos = ref([]);

onMounted(() => {

    fetch('http://localhost:3000/produtos')
    .then(requisicao => requisicao.json())
    .then(retorno => produtos.value = retorno)

})

/* Objeto Produto */

let obj = ref({'id': 0, 'produto': '', 'valor': 0});

/* Funcao Cadastrar */

function cadastrar(event){

    

    //Requisicao
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        body: JSON.stringify(obj.value),
        headers: {'content-Type' : 'application/json'}
    })
    .then(requisicao => requisicao.json())
    .then(retorno => console.log(retorno))


    event.preventDefault();
}


</script>

<!--HTML---->

<template>


<!--FORMULARIO-->

    <form @submit="cadastrar">
        <p>{{ obj }}</p>
        <input type="text" placeholder="Produto" v-model="obj.produto">
        <input type="number" placeholder="Valor" v-model="obj.valor">
        <input type="submit" placeholder="Cadastrar">
    </form>

<!-- TABELA -->

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>cadastrar</th>
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