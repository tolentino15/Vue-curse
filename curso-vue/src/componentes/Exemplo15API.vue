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

/* Selecionar Produto Especifico */
function selecionar(indice){
    obj.value = {
        id : produtos.value[indice].id,
        produto : produtos.value[indice].produto,
        valor : produtos.value[indice].valor,
    }
}

</script>

<!--HTML---->

<template>


<!--FORMULARIO-->

    <form @submit="cadastrar">
        
        <input type="number" placeholder="Produto" v-model="obj.id" class="inp">
        <input type="text" placeholder="Produto" v-model="obj.produto" class="inp">
        <input type="number" placeholder="Valor" v-model="obj.valor" class="inp">
        <input type="submit" value="Cadastrar" class="espacamentoBtn btn">
        <input type="button" value="Editar " class="espacamentoBtn btn">
        <input type="button" value="Remover " class="espacamentoBtn btn">
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
    <tr v-for="(p, indice) in produtos">
        <td>{{  p.produto }}</td>
        <td>{{ p.valor }}</td>
        <td><button @click="selecionar(indice)" class="espacamentoBtn btn">SELECIONAR</button></td>
    </tr>
</tbody>


</table>

</template>


<!-- CSS -->

<style>

.inp{
    margin: 10px;
}

.btn{
    background-color: blueviolet;
    color: white;
    font-size: medium;
}

.espacamentoBtn{
    margin-left: 5px;
    margin-right: 5px;
}

</style>