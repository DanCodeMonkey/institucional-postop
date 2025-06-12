const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').substring(0, 11); // só números, max 11 dígitos
    let formattedNumber;

    if (x.length > 6) {
      formattedNumber = `(${x.substring(0, 2)}) ${x.substring(2, 7)}-${x.substring(7, 11)}`;
    } else if (x.length > 2) {
      formattedNumber = `(${x.substring(0, 2)}) ${x.substring(2)}`;
    } else if (x.length > 0) {
      formattedNumber = `(${x}`;
    }

    e.target.value = formattedNumber || '';
  });

//menu mobile
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

//formulario
 const form = document.getElementById("meuFormulario");
 const statusMsg = document.getElementById("status-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nome: document.getElementById("nome").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      empresa: document.getElementById("empresa").value,
      mensagem: document.getElementById("mensagem").value

    };

    fetch("https://script.google.com/macros/s/AKfycbwDZgwQxv4Mp-wWkW86nRRzi8GhCqryOe0eE9YU4zi2B5Nyy-bLHi5yHylluYQrYRoa/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Mostra mensagem no parágrafo
    statusMsg.textContent = "Enviado com sucesso!";

    // Limpa formulário
    form.reset();

    // Remove a mensagem após 2 segundos
    setTimeout(() => {
      statusMsg.textContent = "";
    }, 4000);
  });