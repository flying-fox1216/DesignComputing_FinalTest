let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// function observerCallback() {}
let observerCallback = (observingTargets) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      eachObservingTarget.target.classList.add("triggered");
    } else {
      eachObservingTarget.target.classList.remove("triggered");
    }
  });
};

let ob = new IntersectionObserver(observerCallback, observerOption);

let elems = document.querySelectorAll(".animTrigger");
console.log(elems);

elems.forEach((eachElem) => {
  ob.observe(eachElem);
});
