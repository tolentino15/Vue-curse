<!--SCRIPT-->

<script setup>

import { onMounted, ref } from 'vue';

let produtos = ref([]);

onMounted(() => {

    fetch('http://localhost:3000/produtos')
    .then(requisicao => requisicao.json())
    .then(retorno => produtos.value = retorno)

})

/* Visibilidade dos botoes */
let btnCadastrar = ref([true]);

/* Objeto Produto */

let obj = ref({'id':0, 'produto': '', 'valor': 0});

/* Funcao Cadastrar */

function cadastrar(event){

    //Requisicao
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        body: JSON.stringify(obj.value),
        headers: {'content-Type' : 'application/json'}
    })
    .then(requisicao => requisicao.json())
    .then(retorno => {

            //Cadastrar produto no vetor
            produtos.value.push(retorno)

            //Limpar inputs
            obj.value.produto = '';
            obj.value.valor = 0;
            obj.value.id = 0

    })


    event.preventDefault(); //  não atualizar a pagina
}

/* Funcao Editar */

function editar(){

//Requisicao
fetch('http://localhost:3000/produtos/'+ obj.value.id, {
    method: 'PUT', //Alterar
    body: JSON.stringify(obj.value),
    headers: {'content-Type' : 'application/json'}
})
.then(requisicao => requisicao.json())
.then(retorno => {

//Obter indice do vetor
    let indiceprod = produtos.value.findIndex(objP => {
        return objP.id === retorno.id;
    });

//Editar produto no vetor
produtos.value[indiceprod] = retorno;

//Alterar visibilidade
btnCadastrar.value = true;

//Limpar inputs
obj.value.produto = '';
obj.value.valor = 0;
obj.value.id = 0

})

}

/* FUNCAO REMOVER */
function remover(){

//Requisicao
fetch('http://localhost:3000/produtos/'+ obj.value.id, {
    method: 'DELETE', //Alterar 
    //nao tem body
    headers: {'content-Type' : 'application/json'}
})
.then(requisicao => requisicao.json())
.then(() => { //nao tem retorno

//Obter indice do vetor
    let indiceprod = produtos.value.findIndex(objP => {
        return objP.id === obj.value.id; //obj.value pois nao tem retorno
    });

//remover produto no vetor
produtos.value.splice(indiceprod,1); //splice remove valores do array

//Alterar visibilidade
btnCadastrar.value = true;

//Limpar inputs
obj.value.produto = '';
obj.value.valor = 0;
obj.value.id = 0

})

}

/* Selecionar Produto Especifico */
function selecionar(indice){
    obj.value = {
        id : produtos.value[indice].id,
        produto : produtos.value[indice].produto,
        valor : produtos.value[indice].valor,
    }

    btnCadastrar.value = false; //Tira o botao cadatrar

}

</script>

<!--HTML---->

<template>


<!--FORMULARIO-->

    <form @submit="cadastrar" class="form">
        
        <input type="hidden" placeholder="Produto" v-model="obj.id" >
        <input type="text" placeholder="Produto" v-model="obj.produto" >
        <input type="number" placeholder="Valor" v-model="obj.valor" >
        <input type="submit" v-if="btnCadastrar" value="Cadastrar" class="espacamentoBtn btn">
        <input type="button" @click="editar" v-if="!btnCadastrar" value="Editar " class="espacamentoBtn btn">
        <input type="button" @click="remover" v-if="!btnCadastrar" value="Remover " class="espacamentoBtn btn">
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

.form{
    width: 50%;
    margin: 30px auto;
    text-align: center;
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