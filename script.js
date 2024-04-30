const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = "style.css"; 
document.head.appendChild(cssLink); 

const fontawesome = document.createElement("link");
      fontawesome.rel = "stylesheet";
      fontawesome.href = "https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"; 
document.head.appendChild(fontawesome); 


const myapp = document.createElement("script");
      myapp.src = "myapp.js";
document.body.appendChild(myapp); 

const music = document.createElement("script");
      music.src = "music.js";
document.body.appendChild(music); 