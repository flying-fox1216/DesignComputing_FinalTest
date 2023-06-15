const btns = document.querySelectorAll("aside>ol>a");
let lastBtns;

const whenIClickTheBtn = (e) => {
  const toggleTarget = e.currentTarget.querySelector("li");
  toggleTarget.classList.add("pressed");
  console.log("toggleTarget", toggleTarget);

  lastBtns?.classList.remove("pressed");
  lastBtns = toggleTarget;
};

btns.forEach((eachBtn) => {
  eachBtn.addEventListener("click", whenIClickTheBtn);
});
