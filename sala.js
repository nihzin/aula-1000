inicializar();
function inicializar(){
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";


}
const firebaseConfig = {
    apiKey: "AIzaSyDXU6Rg7r9CkIYX-tiXTAlsLf-zBHHrWf4",
    authDomain: "kwitter-a7a5f.firebaseapp.com",
    databaseURL: "https://kwitter-a7a5f-default-rtdb.firebaseio.com",
    projectId: "kwitter-a7a5f",
    storageBucket: "kwitter-a7a5f.appspot.com",
    messagingSenderId: "587129294062",
    appId: "1:587129294062:web:aece132a9783a1aa31f7ff",
    measurementId: "G-P6H9Y0W3S1"
  };