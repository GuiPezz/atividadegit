const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usuario.value === "" || senha.value === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "#ff5252";
  } else if (usuario.value === "adm" && senha.value === "123") {
    mensagem.style.color = "#03dac6";
    mensagem.textContent = "Login realizado com sucesso!";

    // ✅ Redireciona somente com login correto
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    mensagem.style.color = "#ff5252";
    mensagem.textContent = "Usuário ou senha incorretos.";
  }
});
