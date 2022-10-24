const btn = document.getElementById('hamburger')
const ul = document.getElementById('nav-ul')

btn.addEventListener('click', (e)=> {
  ul.classList.toggle('show-ul')
})