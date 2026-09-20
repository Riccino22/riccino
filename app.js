// Compartido por index.html y roadmap.html. Se carga con defer, así que el DOM
// ya está parseado; aun así cada bloque comprueba que su elemento exista, para
// que agregar una página sin alguno de ellos no rompa el resto.

var year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

var toggle = document.querySelector('.nav-toggle');
var drawer = document.getElementById('nav-drawer');

if (toggle && drawer) {
  toggle.addEventListener('click', function () {
    var willOpen = drawer.hidden;
    drawer.hidden = !willOpen;
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      drawer.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  });
}
