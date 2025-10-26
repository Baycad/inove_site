// Rolagem suave até a seção de contato
document.getElementById("scrollButton").addEventListener("click", function(event) {
  event.preventDefault();
  const target = document.querySelector("#contato");
  const top = target.getBoundingClientRect().top + window.scrollY - 60;

  window.scrollTo({
    top: top,
    behavior: "smooth"
  });
});
