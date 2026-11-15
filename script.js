
function showMessage(tool) {
  const message = document.getElementById("message");

  message.textContent = tool + " – בקרוב יהיה זמין ב-AI HUB!";
}

console.log("AI HUB is ready!");

function sendMessage() {
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  const message = input.value.trim();
  if (!message) return;

  const userMessage = document.createElement("p");
  userMessage.textContent = "אתה: " + message;
  chat.appendChild(userMessage);

  const reply = document.createElement("p");
  reply.textContent = "AI HUB: קיבלתי את ההודעה שלך!";
  chat.appendChild(reply);

  input.value = "";
    }


