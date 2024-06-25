<!-- Script -->

<script setup lang="ts">

    import { ref } from 'vue';

    //Variaveis
    let nome = ref('Luiz');

    //Funcao que retorna a media do aluno
    function mediaAluno(nota1, nota2){
            return (nota1+nota2)/2;
    }
    //situacao do aluno
    function situacao(media){
        let situacaoAluno = '';

        if(media >= 7){
            situacaoAluno = 'Aprovado!'
        } else if (media >= 5){
            situacaoAluno = 'Na Final!'
        }else{
            situacaoAluno = 'Reprovado!'
        }

        return situacaoAluno
    }


</script>