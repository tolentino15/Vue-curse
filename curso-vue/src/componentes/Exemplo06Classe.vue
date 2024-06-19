<!--SCRIPT-->

<script setup>

let validacao = true;

</script>

<!--CSS-->

<style>

.true{
        color: green
}

.false{
        color:red
}

</style>

<!--HTML---->

<template>

    <p :class="validacao ? 'true' : 'false'">Utilizando class</p>
    
</template>