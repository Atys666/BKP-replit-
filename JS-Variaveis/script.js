//localizar elementos html
//email,telefone,idade,sexo
const nome = document.getElementById('nome')
const sobrenomenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const idade = document.getElementById('idade')
const sexo = document.getElementById('sexo')
//alert nome
//alert sobrenome
//criar variaveis
const NovoNome = 'colette'
const NovoSobrenome = 'StarPark'
const NovoEmail = 'colette@email.com'
const NovoTelefone = '1111-6666'
const NovoIdade = '17'
const NovoSexo = 'cis femenina'
//atribuir alores ao html com os valores das minhas variaveis
nome.innerText = NovoNome
sobrenome.innerText = NovoSobrenome
email.innerText = NovoEmail
telefone.innerText = NovoTelefone
idade.innerText = NovoIdade
sexo.innerText = NovoSexo