document.getElementById("subscriptionForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Acessando os elementos do formulário diretamente
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Dados do formulário em JSON
    const data = {
        name: name,
        email: email,
        message: message,
    };

    try {
        const response = await fetch("https://sua-api.com/endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Cadastro realizado com sucesso. Entraremos em contato!");
            document.getElementById("subscriptionForm").reset();  // Limpa o formulário após o envio bem-sucedido
        } else {
            alert("Houve um problema ao enviar o formulário. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    }
});
