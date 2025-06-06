function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {

        var tabela = '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">';
        tabela += '<thead><tr>';
        tabela += '<th style="background-color: #21272b; color: white; padding: 10px; text-align: left;">Nome</th>';
        tabela += '<th style="background-color: #21272b; color: white; padding: 10px; text-align: left;">E-mail</th>';
        tabela += '<th style="background-color: #21272b; color: white; padding: 10px; text-align: left;">Mensagem</th>';
        tabela += '</tr></thead><tbody>';

        data.forEach(function(mensagem) {
            tabela += '<tr>';
            tabela += '<td>' + mensagem.nome + '</td>';
            tabela += '<td>' + mensagem.email + '</td>';
            tabela += '<td>' + mensagem.mensagem + '</td>';
            tabela += '</tr>';
        });

        tabela += '</tbody></table>';

        document.getElementById('tabela-mensagens').innerHTML = tabela;
    });

}


function inserirMensagem() {

    var mensagem = {
        
        nome: document.getElementById("nome").value, 
        email: document.getElementById("email").value, 
        mensagem: document.getElementById("msg").value
    };

    var inserir = $.ajax({

        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'text',
        contentType: 'application/json',
    });

    inserir.done(function(){
        alert('Mensagem enviada com sucesso!');
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("msg").value = '';
    })
    .fail(function(){
        alert('Erro no envio da mensagem.');
    });
 
}

function validarUsuario() {

    var objLoginSenha = {
        email: document.getElementById("email-admin").value, 
        senha: document.getElementById("senha").value
    } 
    
    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data){
        
        if (data === true) {
            window.location.href = 'mensagens.html';
        } else {
            alert('E-mail e Senha inválidos.');
        }
        
        retorno = data;
    });

    return retorno;
}