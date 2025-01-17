import React from 'react';
// Importa a biblioteca React, que é necessária para criar componentes funcionais em React.

import CadastroAluno from '../../components/Cadastro/CadastroAluno';
// Importa o componente CadastroAluno, que está localizado na pasta '../../components/CadastroAluno/CadastroAluno'.
// Este componente é responsável pelo formulário ou funcionalidade de cadastro de aluno.

import Navegacao from '../../components/Navegacao/Navegacao';
// Importa o componente Navegacao, que está localizado na pasta '../../components/Navegacao/Navegacao'.
// Este componente provavelmente contém a barra de navegação ou menu do aplicativo.

function AlunoCadastro() {
    // Define um componente funcional chamado AlunoCadastro.
    return (
        <>
            <Navegacao />
            <CadastroAluno />
        </>
        // As tags vazias (<></>) são fragmentos do React que permitem agrupar múltiplos elementos sem adicionar nós extras ao DOM.
    );
}

export default AlunoCadastro;//exporta o componente AlunoCadastro para ser usado em outras partes da aplicação.