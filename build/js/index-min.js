window.addEventListener("load",()=>{const e=document.querySelector(".theme-dark"),t=document.querySelectorAll(".black__white__filter");document.querySelector(".theme__toggle").addEventListener("click",()=>{e.classList.toggle("theme-light"),e.classList.toggle("theme-dark"),t.forEach(e=>e.classList.toggle("black__white__filter"))}),document.querySelector("#copyright__year").textContent=(new Date).getFullYear()});