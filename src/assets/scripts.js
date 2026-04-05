// Seleccionamos todos los enlaces que contienen un "#"
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Evitamos el comportamiento por defecto

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calculamos la posición considerando el Navbar fijo (aprox 70px)
      const offset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Desplazamiento suave (Smooth Scroll)
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // TRUCO: Limpiamos el hash de la URL sin recargar la página
      history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  });
});
