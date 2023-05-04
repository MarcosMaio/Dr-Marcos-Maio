var botãoAdicionar = document.querySelector("#buscar-pacientes"); // seleciono o botão no mundo HTML

botãoAdicionar.addEventListener("click", function(){    //cria um escutador de eventos para quando eu clicar no botão algo acontecer

    var xhr = new XMLHttpRequest(); // objeto do javaScript responsavel por fazer requisições http , assim podemos extrair o conteudo de APIS que queremos de paginas web
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // ensina qual tipo de requisição eu quero fazer e para onde , essa função abre a coneção com o endereço que a gente quer fazer coneção
//essa opção acima apenas configura a requisição , não a envia , e apenas para abrir as porta , e ela recebe o metodo GET como parametro e o endereço da API
    
    xhr.addEventListener("load", function() { // adiciono um escutador de eventos com esse evento e load para depois que a resição for enviada ele carregar aqueles dados que lá consta
    var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){ //caso o código 200 der certo que e o código de sucesso de carregamento dos dados execute o  código abaixo
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText; // depois ele vai devolver os dados daquela API que ele carregou no meu console
        var pacientes = JSON.parse(resposta); // devolve todo aquele texto que esta em API no formato Json em formato array
        
        pacientes.forEach(function(paciente) {  //aqui eu vou dizer que para cada paciente no array eu quero adicionar ele na tabela , por que se a função tiver sozinha ela só iria adicionar 1 paciente
            adicionaPacienteNaTabela(paciente);
        }); 
            }else {  //caso der um código de erro 404 por exemplo ou qualquer outro exiba no console o erro
                console.log(xhr.status);
                console.log(xhr.responseText)

                erroAjax.Ajax.classList.remove("invisivel");
        }

    });

        xhr.send(); // envia a requisição que acabamos de criar


    });                                                                 