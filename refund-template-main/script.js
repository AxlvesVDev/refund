//8º selecionando o proprio form
const form = document.querySelector("form")

// 1º selecionando os elementos do formulário 
const amount = document.getElementById("amount")
//6º selecionando o nome da despesa
const expense = document.getElementById("expense")
//7º selecionando categoria
const category = document.getElementById("category")

// 2º capturando entrada de valor nesse input
amount.oninput = () => {
   // console.log("Novo conteúdo! ")

 //3º jogando uma regex para aceitar somente numeros no campo 
 // obtem o valor atual do input e removo caracters nao numericos
 let value = amount.value.replace(/\D+/g, "")
 
// 5º transforma o valor em centavos (dividindo por 100, temos o valor em centavos)
 value = Number(value) / 100
 

 amount.value = formatCurrencyBRL(value)
   
}


// 4º criando função para formatar o valor 
// no caso estamos aproveitando a variavel value que ja temos para atualizar o valor 
function formatCurrencyBRL(value) { 
 value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    
 })

  // retorna o valor formatado
  return value
}

// 9º pegando form para dar o comando de nao recarregar página 
form.onsubmit =  (event) => { 
   // previne o reload da pagina
    event.preventDefault()

    // 10 º criando uma nova despesa, um objeto, agora temos um objeto com todas as informações relacionadas a despesa
    const newExpense = { 
      id: new Date().getTime(),
      expense: expense.value,
      category_id: category.value,
      category_name: category.options[category.selectedIndex].text,
      amount: amount.value,
      created_at: new Date(),
    }

   // console.log(newExpense)
}

// vamos criar agora uma função que vai ficar responsável por adicionar uma nova despesa com todas informações
function expenseAdd (newExpense){ 
   try { 

   } catch (error) { 
      alert("Não foi possível atualizar a lista de despesa")
      console.log(error)
   }
}