const text = document.querySelector(".disappearing-text");
const textContent = text.textContent;
const delay = 150; // 각 글자의 사라지는 딜레이(ms)
const restoreDelay = 100; // 텍스트가 모두 사라진 후 복원되는 딜레이(ms)

text.textContent = ""; // 초기 텍스트 내용을 지움

// 텍스트를 오른쪽에서 왼쪽으로 이동하며 사라지는 애니메이션 함수
function animateDisappear() {
  let i = textContent.length - 1;
  const intervalId = setInterval(() => {
    const truncatedText = textContent.slice(0, i);
    const spaces = " ".repeat(textContent.length - truncatedText.length);
    text.textContent = spaces + truncatedText;
    i--;

    if (i < 0) {
      clearInterval(intervalId);
      setTimeout(animateRestore, restoreDelay);
    }
  }, delay);
}

// 텍스트를 왼쪽에서 오른쪽으로 이동하며 복원되는 애니메이션 함수
function animateRestore() {
  let i = 0;
  const intervalId = setInterval(() => {
    const truncatedText = textContent.slice(i, 0);
    const spaces = " ".repeat(textContent.length - truncatedText.length);
    text.textContent = truncatedText + spaces;
    i++;

    if (i > textContent.length) {
      clearInterval(intervalId);
      setTimeout(animateDisappear, delay);
    }
  }, delay - 100);
}

animateDisappear();




