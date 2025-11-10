function switchTheme() {
  // TODO: implement toggling the light/dark theme
  document.body.classList.add('bg-dark')

  const navbar = document.getElementById('navbar')
  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')

  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.classList.add('text-white', 'bg-dark', 'border-light')
  })

  const tables = document.querySelectorAll('.table')
  tables.forEach(table => {
    table.classList.add('table-dark')
  })

  const cols = document.querySelectorAll('.column')
  cols.forEach(col => {
    col.classList.remove('col')
  })

  const footer = document.querySelector('.navbar-text')
  footer.style.paddingLeft = '1700px'
  footer.style.display = 'block'
  footer.classList.add('text-white')
}