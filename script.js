
function showMessage(tool) {
  document.getElementById("message").textContent =
    tool + " – בקרוב יהיה זמין ב-AI HUB!";
}

console.log("AI HUB is ready!");

const history = [];

async function sendMessage() {
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");
  const message = input.value.trim();

  if (!message) return;

  const userMessage = document.createElement("p");
  userMessage.textContent = "אתה: " + message;
  chat.appendChild(userMessage);

  input.value = "";

  const loading = document.createElement("p");
  loading.textContent = "AI HUB: חושב...";
  chat.appendChild(loading);

  history.push({
    role: "user",
    content: message
  });

  try {
    const result = await puter.ai.chat(history);

    let answer = result.message.content;

    if (Array.isArray(answer)) {
      answer = answer.map(part => part.text || "").join("");
    }

    history.push({
      role: "assistant",
      content: answer
    });

    loading.textContent = "AI HUB: " + answer;

  } catch (error) {
    history.pop();
    loading.textContent =
      "AI HUB: אירעה שגיאה. נסה שוב מאוחר יותר.";
    console.error(error);
  }

  chat.scrollTop = chat.scrollHeight;
        }
  
