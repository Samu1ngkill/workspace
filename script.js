console.log('JavaScript está sendo executado!')

// Função para validar e-mails
function validarEmail(email) {
    // Expressão regular para validar e-mails
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Função para manipular o envio do formulário
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    // Obter os dados armazenados anteriormente
    var emailsArmazenados = JSON.parse(localStorage.getItem('emails')) || [];
    
    // Verificar se o e-mail já está na lista
    if (emailsArmazenados.includes(email)) {
        alert('Este e-mail já foi cadastrado.');
        return;
    }
    
    // Adicionar o novo e-mail à lista
    emailsArmazenados.push(email);
    
    // Atualizar os dados armazenados
    localStorage.setItem('emails', JSON.stringify(emailsArmazenados));
    
    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    
    alert('Obrigado, ' + nome + '! Seu e-mail foi cadastrado com sucesso.');
});
