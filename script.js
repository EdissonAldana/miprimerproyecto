
// Función para filtrar productos por categoría
function filtrar(categoria) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const titulo = card.querySelector('.card-title').textContent.toLowerCase();
      if (categoria === 'todas') {
        card.parentElement.style.display = 'block';
      } else if (titulo.includes(categoria)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  }
  
  // Mostrar información dinámica en el modal al hacer clic en "Ver más"
  const botonesVerMas = document.querySelectorAll('[data-bs-toggle="modal"]');
  const modal = document.getElementById('detalleModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalBody = modal.querySelector('.modal-body');
  
  botonesVerMas.forEach(boton => {
    boton.addEventListener('click', function (e) {
      const card = boton.closest('.card');
      const titulo = card.querySelector('.card-title').textContent;
      const descripcion = card.querySelector('.card-text').textContent;
      const imagen = card.querySelector('img').getAttribute('src');
  
      modalTitle.textContent = titulo;
      modalBody.innerHTML = `
        <img src="${imagen}" class="img-fluid mb-3" alt="${titulo}">
        <p>${descripcion}</p>
      `;
    });
  });
  
  // Validación del formulario de contacto
  document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    if (formulario) {
      formulario.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
  
        if (!nombre.value.trim()) {
          alert('Por favor, ingresa tu nombre.');
          nombre.focus();
          return;
        }
  
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          alert('Por favor, ingresa un correo electrónico válido.');
          email.focus();
          return;
        }
  
        if (!mensaje.value.trim()) {
          alert('Por favor, escribe un mensaje.');
          mensaje.focus();
          return;
        }
  
        alert('Formulario enviado correctamente.');
        formulario.reset();
      });
    }
  
    // Agregar tarjetas con imágenes de productos desde Internet
    const contenedor = document.getElementById('contenedor-productos');
    if (contenedor) {
      const productos = [
        {
          titulo: 'Sabana blanca',
          descripcion: 'Sábana de algodón 100% suave y fresca.',
          imagen:   'assets/img/sabana blanca.jpg'
        },
        {
          titulo: 'Sabana azul',
          descripcion: 'Sábana resistente y elegante en color azul.',
          imagen: 'assets/img/sabana azul.jpg'
        },
        {
          titulo: 'Sabana floral',
          descripcion: 'Diseño floral para un toque decorativo.',
          imagen: 'assets/img/sabana floral.jpg'
        }
      ];
  
      productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
          <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detalleModal">Ver más</button>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
      });
    }
  });
  
  // Sección Sobre Nosotros con formulario
  const seccionNosotros = document.createElement('section');
  seccionNosotros.className = 'container mt-5';
  seccionNosotros.innerHTML = `
    <h2 class="text-center mb-4">Sobre Nosotros</h2>
    <p class="text-center">Este proyecto fue desarrollado por Edisson Aldana. Contacto: edisonaldana702@gmail.com</p>
  
    <h3 class="mt-4">Formulario de Contacto</h3>
    <form id="formulario-contacto" class="row g-3">
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" placeholder="tuemail@ejemplo.com">
      </div>
      <div class="col-12">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>
      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  `;
  document.body.appendChild(seccionNosotros);
  