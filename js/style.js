
// scroll========================================================

let iconUp = document.getElementById('icon-up');
let nav = document.querySelector('nav')
window.onscroll = function () {
    
    if(this.scrollY >= 600){
        iconUp.classList.add('show');
        nav.classList.add('show');
        // dark.classList.add('up')
    }else{
        iconUp.classList.remove('show');
        nav.classList.remove('show');
        // dark.classList.remove('up')
    }
}
iconUp.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// hide imges=================================================================
  function btn() {
    var x = document.getElementById('container')
    var b = document.getElementById('btn')
   

    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.cssText ="wight:50%";
     
    } else {
      x.style.display = "none";
    }
  }

//   dark=====================================================
var sunIcon = document.querySelector('#dark-sun');
var moonIcon = document.querySelector('#dark-mode');
var link = document.querySelector("#link");
moonIcon.addEventListener('click',()=>{
    link.setAttribute("href","css/dark-mode.css");
    localStorage.setItem('dark-mode',"css/dark-mode.css")
  //  console.log("dark");
})

if(localStorage.getItem('dark-mode')){
   link.setAttribute("href","css/dark-mode.css");

}
sunIcon.addEventListener('click',()=>{
   link.setAttribute("href","css/style.css");
  //  console.log("sun");
   localStorage.removeItem("dark-mood");
})

// =====================dnot writing Texterea========================
  let description = document.getElementById('description');
    let Input1 = document.getElementById('Input1');
    let Input2 = document.getElementById('Input2');
    let form = document.querySelector('.form');

    description.disabled = true;

    form.onchange = function () {
      if (Input1.value == "" || Input2.value == "") {
        description.setAttribute("disabled", true);
      } else {
        description.removeAttribute("disabled");
      }
    }


  