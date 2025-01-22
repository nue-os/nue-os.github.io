const messages = {
  major:
    "제 주전공은 '정보보안암호수학과'이고, 복수전공은 '소프트웨어전공' 입니다. 🎓",
  mbti: `<div><span>MBTI는 'ISFJ' 입니다.</span> <img src="./mbti.png" alt="mbti"/></div>`,
  exp: "지금까지 제일 좋았던 경험은.. 혼자서 간 몽골여행 ! 밤하늘의 별이 장난아니에요..🥹🌌",
  hobby: `요즘 취미는 다꾸(다이어리 꾸미기)👑이고, 관심사는 요리👩🏻‍🍳 입니다 ~ <br/><br/>집에서 밥 해먹으려고 노력하다 보니 유튜브에 레시피 영상들이 많이 나오는 요즘이에요 ㅎ`,
  plan: "제발 올해 안에 취업하기 ! ! ! <br/> 벌써 1년 째 취준 중이네여...😭",
  contact: `<div><img src="./github.png" alt="github"/> <a href="https://github.com/silver0108" target="_blank">https://github.com/silver0108</a></div><br/>
    <div><img src="./tistory.svg" alt="tistory"/> <a href="https://nueos.tistory.com" target="_blank">https://nueos.tistory.com</a></div>`,
};

const images = {
  major: "",
  mbti: "",
  exp: `<img src="./mongolia1.jpeg" alt="몽골1"/> <img src="./mongolia2.jpeg" alt="몽골2"/>`,
  hobby: "",
  plan: "",
  contact: "",
};

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

function refreshPage() {
  appWrapper.style.display = "grid";
  messageBox.style.display = "none";
  imageBox.style.display = "none";
  imageBox.classList.remove("visible");
}
