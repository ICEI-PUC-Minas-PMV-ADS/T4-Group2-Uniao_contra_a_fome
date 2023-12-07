function entrarBtn(e) {
  const email = document.getElementById("typeEmailX-2")
  const senha = document.getElementById("typePasswordX-2")
  const regexValidMail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!regexValidMail.test(email.value)) {
    email.value = ""
    senha.value = ""
    alert("Email inválido")
    return
  } else if (!senha.value) {
    alert("Senha precisa ser informada")
  } else {
    localStorage.setItem('Token', 'logado')
    window.location.href = "../pages/principal.html"
  }
}
