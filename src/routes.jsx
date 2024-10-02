import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Imc from './pages/imc/imc'; 
import Login from './pages/Login/Login';

import CadastroAluno from './pages/Aluno/AlunoCadastro';
import ListarAluno from './pages/Aluno/AlunoListagem';
import AtualizarAluno from './pages/Update/UpdateAluno';
import CardAluno from './pages/Aluno/AlunoCard';

import CadastroProfessor from './pages/Professor/ProfessorCadastro';
import ListarProfessor from './pages/Professor/ProfessorListagem';
import AtualizarProfessor from './pages/Update/UpdateProfessor';
import CardProfessor from './pages/Professor/ProfessorCard';

import CadastroExercicio from './pages/Exercicio/ExercicioCadastro';
import ListarExercicio from './pages/Exercicio/ExercicioListagem';
import AtualizarExercicio from './pages/Update/UpdateExercicio';

import CadastroAparelho from './pages/Aparelho/AparelhoCadastro';
import ListarAparelho from './pages/Aparelho/AparelhoListagem';
import AtualizarAparelho from './pages/Update/UpdateAparelho';

import RotaProtegida from './components/Rotas/RotaProtegida';
import { Rotas } from './AppConfig';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes> 
                {/* Rotas principais */}
                <Route path={Rotas.HOME} element={<Home />} />
                <Route path={Rotas.IMC} element={<Imc />} /> 
                <Route path={Rotas.LOGIN} element={<Login />} />

                {/* Rotas protegidas */}
                {/* Rotas aluno */}
                <Route path={Rotas.CADASTRO_ALUNO} element={<RotaProtegida element={CadastroAluno} />} />
                <Route path={Rotas.LISTAGEM_ALUNO} element={<RotaProtegida element={ListarAluno} />} />
                <Route path={Rotas.ATUALIZAR_ALUNO} element={<RotaProtegida element={AtualizarAluno} />} />
                <Route path={Rotas.CARD_ALUNO} element={<RotaProtegida element={CardAluno} />} />

                {/* Rotas professor */}
                <Route path={Rotas.CADASTRO_PROFESSOR} element={<RotaProtegida element={CadastroProfessor} />} />
                <Route path={Rotas.LISTAGEM_PROFESSOR} element={<RotaProtegida element={ListarProfessor} />} />
                <Route path={Rotas.ATUALIZAR_PROFESSOR} element={<RotaProtegida element={AtualizarProfessor} />} />
                <Route path={Rotas.CARD_PROFESSOR} element={<RotaProtegida element={CardProfessor} />} />

                {/* Rotas exercicio */}
                <Route path={Rotas.CADASTRO_EXERCICIO} element={<RotaProtegida element={CadastroExercicio} />} />
                <Route path={Rotas.LISTAGEM_EXERCICIO} element={<RotaProtegida element={ListarExercicio} />} />
                <Route path={Rotas.ATUALIZAR_EXERCICIO} element={<RotaProtegida element={AtualizarExercicio} />} />

                {/* Rotas aparelho */}
                <Route path={Rotas.CADASTRO_APARELHO} element={<RotaProtegida element={CadastroAparelho} />} />
                <Route path={Rotas.LISTAGEM_APARELHO} element={<RotaProtegida element={ListarAparelho} />} />
                <Route path={Rotas.ATUALIZAR_APARELHO} element={<RotaProtegida element={AtualizarAparelho} />} />

            </Routes>
        </BrowserRouter>
    );
}
