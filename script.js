const box = document.getElementById("exercise_fixed_box");
const box2 = document.getElementById("exercise_bg_box");

box.addEventListener("click", () => {
  box.classList.toggle("change");
});

box2.addEventListener("click", () => {
  box2.classList.toggle("changed");
});
