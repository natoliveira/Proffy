//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click',cloneField)
//Executar uma acao
function cloneField() {
//Duplicar os campos.Quais campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean: true ou false
//pegar os campos. que campos?
const fields = newFieldContainer.querySelectorAll('input')
//para cada campo, limpar
fields.forEach(function(field) {
    //pega o field do momento e limpa ele
    field.value = ""
})

//colocar na página: onde??
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}