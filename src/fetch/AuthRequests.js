class AuthRequests {
    constructor() {
        this.serverUrl = import.meta.env.VITE_API_URL;
        this.routeLogin = '/login';
    }

    /**
     * Faz a requisição de login com as credenciais fornecidas.
     * @param {Object} login - Objeto contendo email e senha.
     * @returns {Object} Dados de resposta do login, contendo o token e informações do usuário.
     */
    async login(login) {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeLogin}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login) // Enviando email e senha
            });

            // Se a resposta não for bem-sucedida, lança um erro
            if (!response.ok) {
                console.log('Erro na autenticação');
                throw new Error('Falha no login');
            }

            // Extrai os dados da resposta
            const data = await response.json();
            console.log('Login bem-sucedido, dados recebidos:', data);

            // Verifica se a autenticação foi bem-sucedida
            if (data.auth) {
                const userType = data.userType; // 'professor' ou 'aluno'
                const user = data[userType]; // Acessa o objeto aluno ou professor com base no tipo de usuário

                console.log(`Chamando persistToken com: token: ${data.token}, nome: ${user.nome}, tipo: ${userType}`);
                
                // Persiste o token, nome do usuário e tipo de usuário
                this.persistToken(data.token, user.nome, userType);
            }

            return data; // Retorna os dados da autenticação
        } catch (error) {
            console.error('Erro: ', error);
            throw error;
        }
    }

    /**
     * Persiste o token JWT, o nome do usuário e o tipo de usuário no localStorage.
     * @param {string} token - O token JWT gerado após o login.
     * @param {string} username - Nome do usuário autenticado.
     * @param {string} userType - Tipo de usuário (professor ou aluno).
     */
    persistToken(token, username, userType) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('userType', userType); // Armazena o tipo de usuário (professor ou aluno)
    }

    /**
     * Remove o token e as informações do usuário do localStorage.
     */
    removeToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userType');
        window.location.href = '/';
    }

    /**
     * Verifica se o token armazenado está expirado.
     * @returns {boolean} Retorna true se o token for válido, false se estiver expirado.
     */
    checkTokenExpiry() {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica o payload do token JWT
            const expiry = payload.exp;
            const now = Math.floor(Date.now() / 1000);

            if (expiry < now) {
                this.removeToken();
                return false;
            }
            return true;
        }
        return false;
    }
}

export default new AuthRequests();
