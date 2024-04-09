const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

const linkInput = document.querySelector("#link-input");
const input = document.querySelector("#message-input");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const encrypted = btoa(input.value);
  linkInput.value = `${window.location}#${encrypted}`;
  copyEncryptedLink();
});

function copyEncryptedLink() {
  document.getElementById("copy").addEventListener("click", function () {
    linkInput.select();
    this.textContent = "Copied";
  });
}
