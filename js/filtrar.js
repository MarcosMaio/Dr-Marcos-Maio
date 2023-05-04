var campoFiltro = document.querySelector("#filtrar-tabela");  //seleciona a tabela criada no HTML

    campoFiltro.addEventListener("input", function(){        //adiciona um escutador de eventos no formato ""input" que "escuta" o texto digitado juntamente de uma função anonima
    var pacientes = document.querySelectorAll(".paciente");  //seleciona a class paciente que foi criada via HTML e contem as informações de todos os pacientes

    if (this.value.length > 0){ // se o conteudo de texto do meu campo tiver um valor maior que zero eu excuto o for abaixo se não eu não executo a ideia e não aplicar o invisivel depois de eu ter limpado o campo
        for (var i = 0; i < pacientes.length; i++){   // passo por cada pciente da tabela para comparar se o nome que digito no meu input e igual a o nome dos pacientes da tabela
            // agora vou perguntar se esse paciente tem o nome igual a oque eu digitei no meu campo ? se tiver mostra se não tiver esconde
            var paciente = pacientes[i];   // var paciente no indice [i]
            var tdNome = paciente.querySelector(".info-nome"); // buscando dentro da tr a td com a class .info-nome que corresponde ao nome dos pacientes
            var nome = tdNome.textContent; // agora extrairmos o conteudo de texto dessa td
            
            var expressao = new RegExp(this.value,"i"); // expressão regular criada para fazer com que essa expressaõ busque o valor digitado no meu campo para achar o "nome do meu paciente" por cada caractere digitado "P" acha o unico "Paulo" ex
            //segundo parametro da expressão acima define que eu posso achar o "nome" por letra minuscula também
            
        
            if (!expressao.test(nome)){ // agora eu testo se a minha var expressão possui um pedaço de o nome que eu quero pesquisar se for verdadeiro retorna um nome se for falso não retorna nada 
                    paciente.classList.add("invisivel"); // se for diferente do conteudo de texto do meu campo eu escondo 
                } else { 
                    paciente.classList.remove("invisivel"); // se não eu mostro ou vice versa
                }
            }
            } else { // se o campo de input for apagado depois de digitado ou estiver vazio eu quero remover a class invisivel que faz com os nomes sumam da tabela
                for (var i = 0; i < pacientes.length; i++) { // faço novamente o for para passar por cada paciente da tabela
                    var paciente = pacientes[i];
                    paciente.classList.remove("invisivel"); // removo o invisivel de todos os pacientes que foram apagados momentaneamente quando pesquisei por outro paciente
                }
            }
        });