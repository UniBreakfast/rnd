const genButtons = document.querySelectorAll('.gen-btn')
const copyButtons = document.querySelectorAll('.copy-btn')
const clearButtons = document.querySelectorAll('.clear-btn')
const prevButtons = document.querySelectorAll('.prev-btn')
const nextButtons = document.querySelectorAll('.next-btn')
const genBoxes = document.querySelectorAll('.do [type="checkbox"]')
const outTextareas = document.querySelectorAll('.out>textarea')
const timers = []
const functions = [random, genRandIntFrom0]
const args = Array.from(Array(outTextareas.length), () => [])
const history = Array.from(
  Array(outTextareas.length),
  () => Object.assign([''], { current: 0 })
)

for (const i in genBoxes) {
  genButtons[i].onclick = () => {
    history[i].current = history[i].push(outTextareas[i].value = random()) - 1
  }

  genBoxes[i].onchange = e => {
    if (e.target.checked) startGen(i)
    else stopGen(i)
  }

  copyButtons[i].onclick = async function () {
    if (!outTextareas[i].value) return
    await copyTextToClipboard(outTextareas[i].value)
    this.innerText = 'copied!'
    setTimeout(() => this.innerText = 'copy', 1500)
  }

  clearButtons[i].onclick = () => {
    outTextareas[i].value = ''
    stopGen(i)
  }

  prevButtons[i].onclick = () => {
    let { current } = history[i]
    if (current) history[i].current = --current
    outTextareas[i].value = history[i][current]
    stopGen(i)
  }

  nextButtons[i].onclick = () => {
    let { current } = history[i]
    if (current < history[i].length - 1) {
      history[i].current = ++current
      outTextareas[i].value = history[i][current]
    } else genButtons[i].click()
    stopGen(i)
  }
}

function toggleDarkTheme() {
  document.body.classList.toggle('dark-theme')
  localStorage.darkTheme = localStorage.darkTheme ? '' : 'true'
}

async function copyTextToClipboard(text) {
  return navigator.clipboard?.writeText(text)
    || fallbackCopyTextToClipboard(text)
}

function fallbackCopyTextToClipboard(value) {
  const ta = document.createElement("textarea")
  Object.assign(ta, { value, style: 'top:0;left:0;position:fixed;font-size:1px' })

  document.body.appendChild(ta)
  ta.focus()
  ta.select()

  document.execCommand('copy')
  document.body.removeChild(ta)

  return true
}

function startGen(i) {
  genButtons[i].click()
  timers[i] = setInterval(() => genButtons[i].click(), 2000)
  genBoxes[i].checked = true
}

function stopGen(i) {
  clearInterval(timers[i])
  genBoxes[i].checked = false
}
