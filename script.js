const chatBody = document.getElementById("chatBody");
const msgInput = document.getElementById("msgInput");
const callPopup = document.getElementById("callPopup");
const callTitle = document.getElementById("callTitle");
const contacts = document.querySelectorAll(".contact");
let currentContact = "Riya";
let isMuted = false;

// Switch contact
contacts.forEach(c => {
  c.addEventListener("click", () => {
    contacts.forEach(x => x.classList.remove("active"));
    c.classList.add("active");
    currentContact = c.dataset.name;
    document.querySelector(".chat-with").textContent = "Chat with " + currentContact;
    chatBody.innerHTML = "";
  });
});

// Send message
function sendMessage() {
  const text = msgInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "message me";
  msg.textContent = text;
  chatBody.appendChild(msg);
  msgInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulate reply
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "message them";
    reply.textContent = currentContact + ": " + text;
    chatBody.appendChild(reply);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}

// Call functions
function startCall(type) {
  callTitle.textContent = `Starting ${type} call with ${currentContact}...`;
  callPopup.style.display = "flex";
}

function endCall() {
  callPopup.style.display = "none";
  alert("Call ended with " + currentContact);
}

function toggleMute() {
  isMuted = !isMuted;
  alert(isMuted ? "You are muted" : "You are unmuted");
}
