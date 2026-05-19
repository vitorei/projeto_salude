const respostas = {
    consulta: "📅 Para marcar consulta em Tiradentes, procure a UBS mais próxima ou agendamento da prefeitura.",
    vacina: "💉 Vacinas disponíveis de segunda a sexta das 07h às 17h nas UBS.",
    exames: "🧪 Exames precisam de encaminhamento médico nas unidades de saúde.",
    horario: "⏰ Atendimento: Segunda a Sexta das 07h às 17h.",
    emergencia: "🚑 Em caso de emergência ligue 192 (SAMU).",
    default: "🤖 Não entendi. Tente: consulta, vacina, exames, horário ou emergência."
};

function send() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    if (!input.value.trim()) return;

    const text = input.value.toLowerCase();

    // mensagem usuário
    const user = document.createElement("div");
    user.className = "message user";
    user.innerHTML = input.value;
    messages.appendChild(user);

    input.value = "";

    // resposta bot
    setTimeout(() => {
        const bot = document.createElement("div");
        bot.className = "message bot";
        bot.innerHTML = respostas[text] || respostas.default;

        messages.appendChild(bot);
        messages.scrollTop = messages.scrollHeight;
    }, 500);
}

function quick(type) {
    document.getElementById("input").value = type;
    send();
}