
// RENDER


import { posts } from "./database.js"
import { suggestUsers } from "./database.js"

// RENDER SUGESTOES DE USUARIOS

function renderSugestoes(suggestUsers){
let sugestoes = document.querySelector('.sugestoes')
sugestoes.innerHTML = ''

suggestUsers.forEach(user => {
    let card_sugestao = createCardSugestao(user)
    
    
    sugestoes.appendChild(card_sugestao)
});
}
renderSugestoes(suggestUsers)

function createCardSugestao(suggestUsers){
  let contanierSugestoes = document.createElement('div')
  let contanierSugestoesPerfil = document.createElement('div')
  let imagePerfil = document.createElement('img')
  let contanierNomePerfil = document.createElement('div')
  let nomePerfil = document.createElement('h2')
  let cargoPerfil = document.createElement('p')
  let tagSeguindo = document.createElement('div')
  let seguindo = document.createElement('p')

  contanierSugestoes.classList.add('contanier_sugestoes')
  contanierSugestoesPerfil.classList.add('contanier_sugestoes_perfil')
  imagePerfil.classList.add('image_perfil')
  imagePerfil.src = suggestUsers.img
  imagePerfil.alt = suggestUsers.user
  contanierNomePerfil.classList.add('nome_perfil')
  nomePerfil.innerText = suggestUsers.user
  cargoPerfil.innerText = suggestUsers.stack
  tagSeguindo.classList.add('tag_seguindo')
  seguindo.innerText ='Seguindo'

   
  contanierNomePerfil.append(nomePerfil, cargoPerfil)
  tagSeguindo.appendChild(seguindo)
  contanierSugestoesPerfil.append(imagePerfil, contanierNomePerfil)

  contanierSugestoes.append(contanierSugestoesPerfil,tagSeguindo)

  return contanierSugestoes
}

/*
<div class="contanier_sugestoes">

<div class="contanier_sugestoes_perfil">
  <img class="image_perfil" src="src/assets/img/user3.svg">
  
  <div class="nome_perfil">
    <h2>Carlos Lima</h2>
    <p>UX e UI Design</p>
  </div>
</div>

<div class="tag_seguindo">
    <p>Seguindo</p>
</div>
</div>
*/

// RENDER POSTS

function renderPosts(posts){
let contanierPosts = document.querySelector('.contanier_posts')

contanierPosts.innerHTML = ''

posts.forEach(post => {

let card_post = createCardPost(post)


contanierPosts.appendChild(card_post)


})
}
renderPosts(posts)

function createCardPost(posts){
let cardPostli = document.createElement('li')
let contanierPerfil = document.createElement('div')
let imgPerfil = document.createElement('img')
let nomePerfilpost = document.createElement('div')
let nome = document.createElement('h2')
let cargo = document.createElement('p')
let conteudo = document.createElement('div')
let titulo = document.createElement('h2')
let paragrafo = document.createElement('p')
let buttonPost = document.createElement('div')
let button = document.createElement('button')
let like = document.createElement('img')
let contador = document.createElement('p')

cardPostli.classList.add('card_post')
contanierPerfil.classList.add('contanier_perfil')
imgPerfil.classList.add('image_perfil')
imgPerfil.src = posts.img
imgPerfil.alt = posts.user
nomePerfilpost.classList.add('nome_perfil')
nome.innerText = posts.user
cargo.innerText = posts.stack
conteudo.classList.add('conteudo_post')
titulo.innerText = posts.title
paragrafo.innerText =`${posts.text.substring(0,183)}...`
buttonPost.classList.add('button_post')
button.classList.add('button_abrir_post')
button.innerText = 'Abrir Post'
button.dataset.postId = posts.id
like.src ='src/assets/img/Vector.svg'
like.alt = 'like'
contador.innerHTML = posts.likes

buttonPost.append(button , like , contador)
conteudo.append(titulo , paragrafo)
nomePerfilpost.append(nome , cargo)
contanierPerfil.appendChild(imgPerfil)
contanierPerfil.appendChild(nomePerfilpost)

cardPostli.append(contanierPerfil , conteudo , buttonPost)

return cardPostli

}


/*<ul class="contanier_posts">
        <li class="card_post">
          <div class="contanier_perfil">
        
            <img class="image_perfil" src="src/assets/img/user1.svg">
            
            <div class="nome_perfil">
            <h2>Samuel Leão</h2>
            <p>Front end Engineer</p>
            </div>
    
          </div>
          
          <div class="conteudo_post">
            <h2>Como criar um interface simples e agradável ultilizando boas práticas de design</h2>
            <p>Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
          </div>
          
          <div class="button_post">
          <button>Abrir Post</button>
          <img src="src/assets/img/Vector.svg" alt="like"> <p>0</p>
          </div>

        </li>
      </ul>
*/

// RENDER MODAL 

function renderModal(array){
    const modal = document.querySelector('.modal_contanier')
    const buttons = document.querySelectorAll('.button_abrir_post')

    buttons.forEach(button =>{
        button.addEventListener('click', () =>{
        //console.log(button.dataset.postId)

        const modalContent = createModal(button.dataset.postId,array)

        modal.innerHTML = ''
        modal.appendChild(modalContent)

        modal.showModal()
        closeModal()
        
        })
    })
}
renderModal(posts)



function createModal (id, array){
let modalContanier = document.createElement('div')
let closeModal = document.createElement('button')
let modalContanierPerfil = document.createElement('div')
let modalImage = document.createElement('img')
let modalNomePerfil = document.createElement('div')
let modalNome = document.createElement('h2')
let modalCargo = document.createElement('p')
let modalContanierPost = document.createElement('div')
let modalPostTitle = document.createElement('h2')
let modalPostConteudo = document.createElement('p')

const postFound = array.find(post => post.id == Number(id))

modalContanier.classList.add('modal_camada')
closeModal.classList.add('close_modal')
closeModal.innerText = 'X'

modalContanierPerfil.classList.add('contanier_perfil')
modalImage.classList.add('image_perfil')
modalImage.alt = postFound.user
modalImage.src = postFound.img

modalNomePerfil.classList.add('nome_perfil')
modalNome.innerText = postFound.user
modalCargo.innerText = postFound.stack


modalContanierPost.classList.add('conteudo_post')
modalPostTitle.innerText = postFound.title
modalPostConteudo.innerText = postFound.text

modalContanierPost.append(modalPostTitle , modalPostConteudo)
modalNomePerfil.append(modalNome , modalCargo)
modalContanierPerfil.append(modalImage , modalNomePerfil)

modalContanier.append(closeModal , modalContanierPerfil , modalContanierPost)

return modalContanier

}

function closeModal(){
    const modal = document.querySelector('.modal_contanier')
    const closeButton = document.querySelector('.close_modal')

    closeButton.addEventListener('click', ()=>{
        modal.close()
    })

}

/*
<div class="modal_camada">

<button class="close_modal">X</button>

<div class="contanier_perfil">
   
 <img class="image_perfil" src="src/assets/img/user1.svg">
 
 <div class="nome_perfil">
 <h2>Samuel Leão</h2>
 <p>Front end Engineer</p>
 </div>

</div>

<div class="conteudo_post">
 <h2>Como criar um interface simples e agradável ultilizando boas práticas de design</h2>
 <p>Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.</p>
</div>

</div>
*/


//REGISTRO DE POST

function registroPost(array){
    const inputs = document.querySelectorAll('.criando_posts')
    console.log(inputs)

    const novoPost = {}
    let emptyInput = 0

    inputs.forEach(input => {
    if(input.value == ''){
        emptyInput += 1
    }

    novoPost[input.name] = input.value
    })
    console.log(novoPost)
    novoPost.id = array.length + 1
    novoPost.user = "Samuel Leão"
    novoPost.stack = 'Front end Engineer'
    novoPost.img = "src/assets/img/user1.svg"
    novoPost.likes = 0

    /* user: "Samuel Persuhn",
    stack: "Front end Engineer",
    img: "./src/assets/img/user2.svg",
    likes: 25*/ 

    if(emptyInput>0){
        alert('Preencha os campos necessarios')
    }else{
        array.unshift(novoPost)
    }

}


function eventRegistro(array){
const postar = document.querySelector('.postar')

postar.addEventListener('click', (event) => {
    event.preventDefault()

    registroPost(array)
    renderPosts(array)
    renderModal(posts)
})
}
eventRegistro(posts)