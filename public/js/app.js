let follow_btn = document.querySelector(".follow-btn");
let mesge_btn = document.querySelector(".message-btn");
let buttonsContainer = document.querySelector(".buttons");

function follow() {
    follow_btn.innerText = "Unfollow";
};
follow_btn.addEventListener("click", () => {
    follow();
});


function message() {
    let input = document.createElement("input");
    input.classList.add("msg");
    input.type = "text";
    input.placeholder = "Type a message...";
    buttonsContainer.appendChild(input);
    input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let sendButton = document.createElement("button");
        sendButton.classList.add("send-btn");
        setTimeout(() => {
            sendButton.innerText = "Message sent";
        }, 1000);
        setTimeout(() => {
            sendButton.remove()
        }, 2000);
        buttonsContainer.appendChild(sendButton);
        input.classList.add("input");
        }
    });

}
mesge_btn.addEventListener("click", () => {
    message();
});







