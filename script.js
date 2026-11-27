// Mostra les dades del formulari sense un servidor PHP.
const formulario = document.getElementById('formulario');
if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        document.getElementById('nombre').textContent = document.getElementById('fname').value;
        document.getElementById('apellido').textContent = document.getElementById('lname').value;
        document.getElementById('resultado').hidden = false;
    });
}
