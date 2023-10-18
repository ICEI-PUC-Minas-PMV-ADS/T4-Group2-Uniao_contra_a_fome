function entrarBtn(e) {
  const email = document.getElementById("typeEmailX-2")
  const senha = document.getElementById("typePasswordX-2")

  if (!email.value || !senha.value) {
    alert("Email ou Senha precisam ser informados")
  } else {
    window.location.href = "../pages/principal.html"
  }
}
