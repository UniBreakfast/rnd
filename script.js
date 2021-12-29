const genButtons = document.querySelectorAll('.gen-btn')
const outTextareas = document.querySelectorAll('.out>textarea')

genButtons[0].onclick = () => outTextareas[0].value = random()

function toggleDarkTheme() {
  document.body.classList.toggle('dark-theme')
}
