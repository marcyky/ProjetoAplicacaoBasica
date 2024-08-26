document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para a tela de tarefas
    const addTaskButton = document.getElementById('addTarefa');
    const taskInput = document.getElementById('inputTarefa');
    const taskList = document.getElementById('listaTarefas');

    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const li = document.createElement('li');
                li.textContent = taskText;
                taskList.appendChild(li);
                taskInput.value = '';
            }
        });
    }

    // Lógica para o botão de logout
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Redireciona para a tela de login
            window.location.href = 'login.html';
        });
    }
});

// Função para efetuar o login
function login(event){
	
	event.preventDefault();
	
    const login = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
	const errorMessage = document.getElementById('error-message');

	if (login === 'admin' && senha === '12345') {
		// Redireciona para a tela de tarefas
		window.location.href = 'index.html';
	} else {
		//Exibe um alerta se o login estiver errado
		alert(`Usuário ou Senha inválido`);
	}
}
