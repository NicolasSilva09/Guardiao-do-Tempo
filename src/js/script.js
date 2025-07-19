// Obtém as referências aos elementos
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navbar');

// Adiciona um ouvinte de evento para o clique no hambúrguer
hamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' no próprio hambúrguer (para a animação do 'X')
    hamburguer.classList.toggle('active');
    // Alterna a classe 'active' na barra de navegação (para mostrar/esconder o menu)
    navMenu.classList.toggle('active');
});

// Opcional: Fecha o menu quando um link é clicado (útil para navegação interna)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        hamburguer.classList.remove('active'); // Remove a classe 'active' do hambúrguer
        navMenu.classList.remove('active');   // Remove a classe 'active' da navbar
    });
});