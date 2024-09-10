function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhuma carta foi encontrada</p>"   
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa); 

    // Imprime no console o elemento da seção para fins de depuração.
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados'.
    // O array 'dados' deve conter objetos com as propriedades 'titulo', 'descricao' e 'link'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes o campoPesquisa
        if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {  
            // Concatena uma nova div com as informações do dado atual à string 'resultados'.
        // A div tem classes para estilizar os resultados e contém o título, descrição e um link.
            resultados += `<div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais </a>   
        </div>`;

        }
       
    }

    if (!resultados) {
        resultados = "<p>Nenhuma carta foi encontrada</p>"
    }

    // Atribui o conteúdo da string 'resultados' ao HTML interno da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados da pesquisa.
    section.innerHTML = resultados;
}




