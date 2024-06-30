function Message(type, text) {
  let msgArea = document.getElementById("message-area");
  let msg = document.createElement("div");
  msgArea.classList.add("invisible");
  msg.classList.add("notification");
  msg.classList.add("is-light");
  msg.classList.add("is-shadowed");
  msg.classList.add("is-" + type);
  msg.textContent = text;
  msgArea.appendChild(msg);
  msgArea.classList.remove("invisible");
  setTimeout(() => {
    msg.textContent = "";
    msgArea.removeChild(msg);
    msgArea.classList.add("invisible");
    msg = null;
  }, 3000)
};

module.exports = Message;