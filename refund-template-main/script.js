//8º selecionando o proprio form
const form = document.querySelector("form")

// 1º selecionando os elementos do formulário 
const amount = document.getElementById("amount")
//6º selecionando o nome da despesa
const expense = document.getElementById("expense")
//7º selecionando categoria
const category = document.getElementById("category")


// 14°seleciona os elementos da lista. 
const expenseList = document.querySelector("ul")

const expenseIcon = document.querySelector("li")


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
 
   expenseAdd(newExpense)
   
}

// 11° vamos criar agora uma função que vai ficar responsável por adicionar uma nova despesa com todas informações, comentamos a linha do li agora vamos criar com o Js
function expenseAdd (newExpense){ 
   try { 
      // 12° vamos criar o item para colocar na lista, cria o elemento para adicionar o item (li) na lista (ul)
      const expenseItem = document.createElement("li") 
      expenseItem.classList.add("expense") // ja adicionando a classe de estilização

      // 13 ° cria o ícone da categoria (a img que ta dentro da li)
      const expenseIcon = document.createElement("img")
      expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)  // para definir os atributos que a gente precisa passar (scr, `pasta onde esta arquivo`, 
      expenseIcon.setAttribute("alt", newExpense.category_name)


      // 16° cria a info da despesa 
       const expenseInfo = document.createElement("div") // primeiro a div
      expenseInfo.classList.add("expense-info") // depois a class que ja esta no html 

      // 17° cria o nome da despesa
      const expenseName = document.createElement("strong")
      expenseName.textContent = newExpense.expense 

      // 18° cria categoria de despesa 
      const expenseCategory = document.createElement("span")
      expenseCategory.textContent = newExpense.category_name

      // 19° adicionando o strong e o span dentro da div (conforme esta no html que deixamos como comentario)
      expenseInfo.append(expenseName, expenseCategory)

      // 21° criar o valor da despesa. 
      const expenseAmount = document.createElement("span")
      expenseAmount.classList.add("expense-amount")
      expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace// innerHTML serve para colocar um elemento dentro do outro no formado html mesmo 
      ("R$", "")}` 

         // 22° cria o icone de remover 
         const removeIcon = document.createElement("img")
         removeIcon.classList.add("remove-icon")
         removeIcon.setAttribute("src", "img/remove.svg")
         removeIcon.setAttribute("alt", "remover")


      // 20°adiciona informações no item 
      expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)
     
     
      
   
      // 15 ° adiciona o item na lista
      expenseList.append(expenseItem)

   } catch (error) { 
      alert("Não foi possível atualizar a lista de despesa.")
      console.log(error)
   }
}

