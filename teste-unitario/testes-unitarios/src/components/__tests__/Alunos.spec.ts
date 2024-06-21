// Imports

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Alunos from '../Alunos.vue';

//Testes
describe('Alunos', () => {

    //Verificar o valor da variavel nome
    it('Verificando Variavel NOME', () =>{

            //obter componente ALUNOS
            const componente = mount(Alunos);

            //teste

            expect(componente.vm.nome).toBe('Luiz')

    });

    it('Verificando media do Aluno', () =>{

        //obter o componente
        const componente = mount(Alunos);

        //Teste
        expect(componente.vm.mediaAluno(7,9)).toBe(8);

    })

    it('Verificando situacao do Aluno', () =>{

        //obter o componente
        const componente = mount(Alunos);

        //Teste
        expect(componente.vm.situacao(8)).toBe('Aprovado!');

    })

});