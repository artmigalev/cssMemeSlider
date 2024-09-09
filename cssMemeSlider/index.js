const startIndex = 0;
const pagination = document.querySelector(".pagination");
const minionsText = ["hana, dul, sae", "pōlä nōlä matōkä", "Привет, папагена, tú le bélla cón la papaja"];

pagination.addEventListener("click", handle);

function handle(event) {
  const click = event.target;
  const slides = document.querySelector(".slides");
  const pagination = document.querySelector(".pagination");
  if (click.classList.contains("pagin-btn")) {
    // console.log("sl");

    for (const sl in pagination.children) {
      const btn = pagination.children[sl];


      if(btn.classList.contains("pagin-btn-active")){
        btn.classList.remove('pagin-btn-active')
      }
      if (btn === click) {
        console.log(btn);
        btn.classList.add("pagin-btn-active");
        slides.style.transform = `translateX(-${(Number(sl))*25}%)`
        console.log(( sl));
        console.log((sl+1)*25);


      }
    }
  }
}
