import { messages, images } from "./data/info.js";

const appWrapper = document.querySelector(".app-wrapper");
const appElements = document.querySelectorAll(".app");
const messageBox = document.querySelector(".message-box");
const imageBox = document.querySelector(".image-box");

document.addEventListener("DOMContentLoaded", () => {
  appElements.forEach((app) => {
    const id = app.dataset.id; // data-id로 메시지 키 가져오기

    app.onclick = () => {
      if (messages[id]) {
        messageBox.innerHTML = messages[id]; // 메시지 박스에 HTML 메시지 표시
        imageBox.innerHTML = images[id];
      } else {
        messageBox.textContent = "내용이 없습니다."; // 기본 텍스트 내용 표시
      }

      appWrapper.style.display = "none";
      messageBox.style.display = "block";
      imageBox.style.display = "block";
      imageBox.classList.add("visible");
    };
  });
});

const handPointer = document.querySelector(".hand-pointer");

document.addEventListener("mousemove", (e) => {
  handPointer.style.left = `${e.clientX}px`;
  handPointer.style.top = `${e.clientY + 15}px`;
});

function back() {
  appWrapper.style.display = "grid";
  messageBox.style.display = "none";
  imageBox.style.display = "none";
  imageBox.classList.remove("visible");
}

window.back = back; // script.js가 type="module"로 불러와져 있기 때문에 window 객체에 등록하여 HTML에서 호출되도록 전역 함수 등록 처리
