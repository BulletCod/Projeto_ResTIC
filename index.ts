document.getElementById("subscriptionForm")?.addEventListener("submit", async function (event: Event) {
    event.preventDefault();

    // Verifique se o elemento existe e é um HTMLFormElement
    const form = event.target as HTMLFormElement;

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

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
            alert("Cadastro Concluído!");  // Mensagem de confirmação
            form.reset();  // Limpa o formulário após o envio bem-sucedido
        } else {
            alert("Houve um problema ao enviar o formulário. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    }
});
