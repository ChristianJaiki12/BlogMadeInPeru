
function loadSubPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var subPageContainer = document.getElementById("subPageContainer");
          subPageContainer.innerHTML = this.responseText;
          if (url == "html/dashboard.html") {
            initDashboard();
          }
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  loadSubPage("html/home.html");
  
  //FUNCIONES GLOBALES
  function loginAdmin() {
    // Obtener los valores ingresados por el usuario
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    console.log("hola");
    // Verificar las credenciales
    if (username === "Cjaiki" && password === "Iangianlucca12") {
      // Credenciales correctas, redirigir al dashboard
      loadSubPage("html/dashboard.html");
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  }
  
  //EVENTOS INICIALES DASHBOARD
  var audio = document.querySelector('audio');
  var toggleMusicButton = document.getElementById('toggleMusicButton');
  
  document.addEventListener('DOMContentLoaded', function() {
    audio.volume = 0.1; // Ajusta el volumen al 20% (puedes cambiar este valor según tus necesidades)
  
    toggleMusicButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play(); // Si la música está pausada, la reproduce
        toggleMusicButton.textContent = 'Apagar Música';
      } else {
        audio.pause(); // Si la música está reproduciendo, la pausa
        toggleMusicButton.textContent = 'Encender Música';
      }
    });
  });
  
  let initDashboard = function() {
    document.getElementById('imageForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var imageInput = document.getElementById('imageInput');
      var titleInput = document.getElementById('titleInput');
      var descriptionInput = document.getElementById('descriptionInput');
  
      var file = imageInput.files[0];
  
      if (file) {
        var reader = new FileReader();
  
        reader.onload = function() {
          let cardContainer = document.createElement('div');
          cardContainer.classList.add('card'); // Agregar clase CSS "card"
  
          let frontFace = document.createElement('div');
          frontFace.classList.add('face', 'front'); // Agregar clases CSS "face" y "front"
  
          let imgEl = document.createElement('img');
          imgEl.src = reader.result;
          imgEl.classList.add('front', 'img'); // Agregar clases CSS "front" y "img"
  
          let titleEl = document.createElement('h3');
          titleEl.innerText = titleInput.value;
          titleEl.classList.add('front'); // Agregar clase CSS "front"
  
          frontFace.appendChild(imgEl);
          frontFace.appendChild(titleEl);
  
          let backFace = document.createElement('div');
          backFace.classList.add('face', 'back'); // Agregar clases CSS "face" y "back"
  
          let descriptionEl = document.createElement('p');
          descriptionEl.innerText = descriptionInput.value;
          descriptionEl.classList.add('back', 'p'); // Agregar clases CSS "back" y "p"
  
          let buttonContainer = document.createElement('div');
          buttonContainer.classList.add('button-container'); // Agregar clase CSS "button-container"
  
          let deleteButton = document.createElement('button');
          deleteButton.innerText = 'Eliminar';
          deleteButton.classList.add('delete-button'); // Agregar clase CSS "delete-button"
          deleteButton.addEventListener('click', function() {
            cardContainer.remove();
          });
  
          let sendButton = document.createElement('button');
          sendButton.innerText = 'Enviar';
          sendButton.classList.add('send-button'); // Agregar clase CSS "send-button"
          sendButton.addEventListener('click', function() {
            sendCardToBlog(cardContainer);
          });
  
          buttonContainer.appendChild(deleteButton);
          buttonContainer.appendChild(sendButton);
  
          backFace.appendChild(descriptionEl);
          backFace.appendChild(buttonContainer);
  
          cardContainer.appendChild(frontFace);
          cardContainer.appendChild(backFace);
  
          let imgContainer = document.getElementById('imageContainer');
          imgContainer.appendChild(cardContainer);
        };
  
        reader.readAsDataURL(file);
      }
    });
  };
  
  function sendCardToBlog(card) {
    // Guardar la tarjeta en el almacenamiento local del navegador
    localStorage.setItem("newCard", card.outerHTML);
    // Redirigir a blog.html
    window.location.href = "../html/blog.html";
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    var entriesContainer = document.getElementById("entries-container");
  
    // Obtener la tarjeta guardada del almacenamiento local
    var newCardHTML = localStorage.getItem("newCard");
  
    if (newCardHTML) {
      var tempContainer = document.createElement("div");
      tempContainer.innerHTML = newCardHTML;
      var card = tempContainer.firstChild;
  
      entriesContainer.appendChild(card);
    }
  
    // Limpiar la tarjeta guardada del almacenamiento local
    localStorage.removeItem("newCard");
  });























// ----------------------------------------------
// ---------------------------------------------

// var blogEntries = [];

// function loadRecipes(){
//     for(let i = 0; i < entries.length; i++){
//         displayEntry(entries[i]);
//     }
// }
// let entries = [
//     {
//     imgSrc: "img/card1.jpg",
//     title: "Turismo",
//     description: ["Descubre la magia de Perú, donde la historia se entrelaza con la belleza natural ,y las tradiciones culinarias te cautivan en cada bocado."]
// },

// {
//     imgSrc: "img/gastronomia card2.jpg",
//     title: "Gastronomia",
//     description: ["Sumérgete en los sabores únicos de la gastronomía peruana ,donde cada plato es un viaje de deleite para tus sentidos."]
// },

// {
//     imgSrc: "img/card3.jpg",
//     title: "Fauna",
//     description: ["Descubre la magia de Perú, donde la historia se entrelaza con la belleza natural y las tradiciones culinarias te cautivan en cada bocado."]
// }

// ];


// let displayEntry = function(entry){
//     let newArticle= document.createElement("article");

//     let newImg = document.createElement("img");
//     let newh2 = document.createElement("h2"); 
//     let newP = document.createElement ("p")
    
//     newImg.src = entry.imgSrc;
//     newImg.style.height = "300px";
//     newImg.style.width = "300px";

//     newh2.innerText = entry.title;
//     newP.innerText = entry.description;

//     newArticle.appendChild(newh2);
//     newArticle.appendChild(newImg);
//     newArticle.appendChild(newP);

//     let entriesContainer = document.getElementById ("entries-container")
//     entriesContainer.appendChild(newArticle);
// }




