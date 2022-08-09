// =================================================================================== //
// ==================================== VARIAVEIS ==================================== //
// =================================================================================== //
console.warn("VARIAVEIS");
// 1 - Crie uma variável para cada tipo existente com let ou var

function createVariables() {
    let string = "Emerson"
    var number = 123
    let boolean = true
    var array = [
        "Array",
        "Feito",
        "Com",
        "JavaScript"
    ]
    let json = {
        name: "Emerson",
        age: 27,
        profession: "developer",
        study: "Entra21"
    }

    let functions = function simpleFunction() {
        alert("This a Function!")
    }
   
    function returnFunction() {
        let a = 1
        let b = 2
        return a+b
    }
    returnFunction()
    
    function argumentFunction(a,b) {
        let c = a+b
    }
    argumentFunction()

    function argumentReturnFunction(a,b) {
        let c = a+b
    
        return c
    }
    argumentReturnFunction()
}

// 2 - Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)

function viewLogVariables() {
    let string = "Emerson"
    var number = 123
    let boolean = true
    var array = [
        "Array",
        "Feito",
        "Com",
        "JavaScript"
    ]
    let json = {
        name: "Emerson",
        age: 27,
        profession: "developer",
        study: "Entra21"
    }

    let functions = function simpleFunction() {
        alert("This a Function!")
    }

    console.group('2 - Type of variables')
    console.log(typeof(string));
    console.log(typeof(number));
    console.log(typeof(boolean));
    console.log(typeof(array));
    console.log(typeof(json));
    console.log(typeof(functions));
    console.groupEnd()
}

// 3 - Para cada variável faça um IF que tome uma decisão e também no ELSE

function conditionalsIfElse() {
    let string = "Emerson"
    var number = 123
    let boolean = true
    var array = [
        "Array",
        "Feito",
        "Com",
        "JavaScript"
    ]
    let json = {
        name: "Emerson",
        age: 27,
        profession: "developer",
        study: "Entra21"
    }

    let functions = function simpleFunction() {
        alert("This a Function!")
    }

    console.group('3 - Conditionals')
    
    if(string === "Maria") {
        console.log("The name is Maria");
    } else {
        console.log("Probably the name is Emerson");
    }
    
    if(number !== 123) {
        console.log("OH! the number is hard");
    } else {
        console.log("I already imagined!");
    }
    
    if(boolean === true) {
        console.log("OH! this seems true to me");
    } else {
        console.log("OH! this looks false to me");
    }
    
    if(array.length > 3) {
        console.log("The big Array");
    } else {
        console.log("The short Array");
    }
    
    if(json.length > 0) {
        console.log("There is content");
    } else {
        console.log("There is no content");
    }
    
    if(typeof(functions) === "function") {
        console.log("There is a function");
    } else {
        console.log("There is no function");
    }
    
    console.groupEnd()
}

// 4 - Para uma variável string e number, faça um switch que tome uma decisão

function switchView() {

    console.group('4 - Switch')
    let variableNumber = 123
    let variableString = "string"
    
    switch (variableNumber) {
        case 122:
            console.log("almost there");
            break;
        case 123:
            console.log("Got the value right");
            break;
        default:
            console.log("Error!");
            break;
    }
    switch (variableString) {
        case "string":
            console.log("Got the value right");
            break;
        default:
            console.log("Error!");
            break;
    }
    
    console.groupEnd()
}

// 5 - Para uma variável do tipo array, faça as repetições possíveis (for com índice / foreach)

function runArray() {

    console.group('5 - For and foreach')
    let listNames = ["Maria", "Joao", "Carlos", "Alberto", "Claudia", "Julia", "Ana"]
    
    console.warn("FOR");
    for (let count = 0; count < listNames.length; count++) {
        console.log("The name is", listNames[count], "Position", count);
    }
    
    console.warn("FOREACH");
    listNames.forEach(item => {
        console.log("The name is", item);
    });
    
    console.groupEnd()
}

// 6 - Se cada exercício anterior foi feito de forma unica no arquivo JS, separe-os em funções especificas
createVariables()
viewLogVariables()
conditionalsIfElse()
switchView()
runArray()

// =================================================================================== //
// ========================== Manipular html com Javascript ========================== //
// =================================================================================== //

console.warn("Manipule html with Javascript");

// 1 - Com javascript puro (É importante saber o básico)

// 1.1 - Localize um elemento no html por id
let title = document.getElementById("titulo")
//console.log("O valor do titulo é: ", title.textContent);

// 1.2 - Localize um ou mais elementos por class
let subtitle = document.getElementsByClassName('subtitulo')
//console.log("O valor do subtitulo é: ", subtitle[0].innerText);

// 1.3 - Localize um ou mais elementos por nome do seletor <tag>
let paragraph = document.getElementsByTagName('p')
//console.log("O valor do paragrafo é: ", paragraph[0].innerText);

// 1.4 - Crie um novo paragrafo no body
let createParagraph = document.createElement("p");
document.body.append(createParagraph)
createParagraph.textContent = "Paragrafo totalmente criado e escrito por JavaScript.";

// 1.5 - Crie um novo paragrafo em algum elemento por ID,CLASS,ou seletor
let createParagraph2 = document.createElement("p");
document.getElementById("divParaCriarParagrafo").append(createParagraph2)
createParagraph2.textContent = "Paragrafo criado em elemento, escrito por JavaScript.";

// 2 - Com jQuery (É importante otimizar o trabalho)

// 2.1 - Localize um elemento por ID
let titleLocalizedJQuery = $('#titulo')

// 2.1.1 - Exiba em log o conteúdo desse elemento
console.group('2.1.1 - CONTENT')
    console.log(titleLocalizedJQuery.text());
console.groupEnd()

// 2.1.2 - Exiba em log o conteúdo HTML desse elemento 
console.group('2.1.2 - HTML CONTENT')
    console.log(titleLocalizedJQuery);
console.groupEnd()

// 2.1.3 - Altere o conteúdo desse elemento por outro
$('#titulo').text("Titulo alterado com jQuery!")

// 2.1.4 - Insira um novo elemento internamente a esse com append
$('#titulo').append(
    $("<img>", {src: "./img/qualityOliota.png"})
)

// 2.2 - Localize uma lista de elementos por class
let elementWithClass = [...$(".subtitulo")]

// 2.2.1 - Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
console.group('2.2.1 - Element List Class')
    console.log("List Elementt");    
    console.log(elementWithClass);
    for( count = 0; count< elementWithClass.length ; count++) {
        console.log("Item -",count,"-",elementWithClass[count].textContent);
    }
console.groupEnd()

// 2.2.2 - Altere o conteúdo desses elementos por outro
$(".subtitulo").text("Subtitulo Alterado")

// 2.3 - Localize uma lista de elementos por nome de seletor
let titles = [...$("h1")]

// 2.3.1 - Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
console.group('2.3.1 - Element List Selector')
    console.log("List Elementt");    
    console.log(titles);
    for( count = 0; count< titles.length ; count++) {
        console.log("Item -",count,"-",titles[count].textContent);
    }
console.groupEnd()


// 2.3.2 - Altere o conteúdo desses elementos por outro
$("h1").text("Titulo Alterado")

// =================================================================================== //
// ============================= Eventos entre HTML e JS ============================= //
// =================================================================================== //

// 1 - Com javascript puro (É importante saber o básico)
// 1.1 No html utilize o atributo de seletor onclick para executar funções existente no javascript

let theme = 1
function changeBackground() {
    
    if(theme === 1 ) {
        document.querySelector("body").classList.add("bg-dark")
        let paragraphs = document.querySelectorAll("p")
        paragraphs.forEach(item => {
            item.classList.add("text-light")
        });
        let titles = document.querySelectorAll("h1")
        titles.forEach(item => {
            item.classList.add("text-light")
        });
        let subtitles = document.querySelectorAll("h3")
        subtitles.forEach(item => {
            item.classList.add("text-light")
        });
        let lis = document.querySelectorAll("li")
        lis.forEach(item => {
            item.classList.add("text-light")
        });
        theme = 2
    } else {
        document.querySelector("body").classList.remove("bg-dark")
        let paragraphs = document.querySelectorAll("p")
        paragraphs.forEach(item => {
            item.classList.remove("text-light")
        });
        let titles = document.querySelectorAll("h1")
        titles.forEach(item => {
            item.classList.remove("text-light")
        });
        let subtitles = document.querySelectorAll("h3")
        subtitles.forEach(item => {
            item.classList.remove("text-light")
        });
        let lis = document.querySelectorAll("li")
        lis.forEach(item => {
            item.classList.remove("text-light")
        });
        theme = 1
    }
}

// 1.2 - No javascript crie funções para as operações matemáticas onde o resultado deve ser exibido em log

function calculate() {
    let numberOne = prompt("Insert first number: ");
    let numberTwo = prompt("Insert second number: ");
    let operation = prompt("select a operation (+ - x *)");

    switch (operation) {
        case "+":
            sum(numberOne,numberTwo)
            break;
        case "-":
            subtract(numberOne,numberTwo)
            break;
        case "*":
            multiply(numberOne,numberTwo)
            break;
        case "/":
            divide(numberOne,numberTwo)
            break;
    
        default:
            alert("Escolha uma das operações (+ - x * ) ")
            break;
    }
    function sum(numberOne,numberTwo) {
        alert(Number(numberOne) + Number(numberTwo))
        console.log(Number(numberOne) + Number(numberTwo))
    }
    function subtract(numberOne,numberTwo) {
        alert(Number(numberOne) - Number(numberTwo))
        console.log(Number(numberOne) - Number(numberTwo))
    }
    function multiply(numberOne,numberTwo) {
        alert(Number(numberOne) * Number(numberTwo))
        console.log(Number(numberOne) * Number(numberTwo))
    }
    function divide(numberOne,numberTwo) {
        alert(Number(numberOne) / Number(numberTwo))
        console.log(Number(numberOne) / Number(numberTwo))
    }
}

$("#calculate").on("click", function(){
    calculate()
 })

// 2 - Com jQuery(É importante otimizar o trabalho)
// 2.1 - No html não deve ter menção ao javascript, mas deve permitir o acesso facilitado ao mesmo por id,class ou nome do seletor
$("#verifyJQuery")
// 2.2 - Crie eventos de click para botoes onde a função deve exibir em log apenas que o click funcionou
$("#verifyJQuery").click(()=>{
    console.log('FUNCIONOU!');
})

// 2.3 - Crie evento de submit que exiba em log os dados capturados nos inputs
$("form").on("submit", (event) => {
    event.preventDefault()
    getData()
 })

function getData() {
    let name = $("#name").val()
    let age = $("#age").val()

    console.log("O nome registrado foi",name, "e a sua idade é", age, "anos.");
}