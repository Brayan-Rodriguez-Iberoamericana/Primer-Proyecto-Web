// Datos simulados de imágenes
const imagenes = [
    {
      id: 1,
      titulo: "Bosque mágico",
      descripcion: "Un paisaje de un bosque verde con niebla.",
      autor: "Brayan R.",
      categoria: "naturaleza",
      src: "assets/naturaleza1.jpg"
    },
    {
      id: 2,
      titulo: "Atardecer urbano",
      descripcion: "La ciudad al anochecer.",
      autor: "Brayan R.",
      categoria: "ciudad",
      src: "assets/ciudad1.jpg"
    },
    {
        id: 3,
        titulo: "Auroras Boreales",
        descripcion: "Auroras boreales vistas por primera vez.",
        autor: "Brayan R.",
        categoria: "naturaleza",
        src: "assets/naturaleza2.jpg"
    },
    {
      id: 4,
      titulo: "Calles de noche",
      descripcion: "Cuidad moderna con con luces neon.",
      autor: "Brayan R.",
      categoria: "ciudad",
      src: "assets/ciudad2.jpg"
    }
  ];
  
  // Mostrar imágenes al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    mostrarImagenes("todos");
    document.getElementById("filtroCategoria").addEventListener("change", filtrarImagenes);
    document.getElementById("contactoForm").addEventListener("submit", validarFormulario);
  });
  
  // Mostrar miniaturas
  function mostrarImagenes(categoria) {
    const container = document.getElementById("imagenesContainer");
    container.innerHTML = "";
  
    const filtradas = categoria === "todos"
      ? imagenes
      : imagenes.filter(img => img.categoria === categoria);
  
    filtradas.forEach(img => {
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
        <div class="card h-100" onclick="mostrarDetalle(${img.id})">
          <img src="${img.src}" class="card-img-top" alt="${img.titulo}">
          <div class="card-body">
            <h5 class="card-title">${img.titulo}</h5>
          </div>
        </div>
      `;
  
      container.appendChild(col);
    });
  }
  
  // Filtro de imágenes por categoría
  function filtrarImagenes() {
    const categoria = document.getElementById("filtroCategoria").value;
    mostrarImagenes(categoria);
  }
  
  // Mostrar detalle de una imagen
  function mostrarDetalle(id) {
    const img = imagenes.find(img => img.id === id);
    if (img) {
      document.getElementById("detalleImagen").src = img.src;
      document.getElementById("detalleTitulo").textContent = img.titulo;
      document.getElementById("detalleDescripcion").textContent = img.descripcion;
      document.getElementById("detalleAutor").textContent = `Autor: ${img.autor}`;
  
      document.getElementById("galeria").classList.add("d-none");
      document.getElementById("detalle").classList.remove("d-none");
    }
  }
  
  // Cerrar vista detallada
  function cerrarDetalle() {
    document.getElementById("detalle").classList.add("d-none");
    document.getElementById("galeria").classList.remove("d-none");
  }
  
  // Validación del formulario de contacto
  function validarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !email || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor ingresa un correo válido.");
      return;
    }
  
    alert("¡Formulario enviado correctamente!");
    document.getElementById("contactoForm").reset();
  }
  