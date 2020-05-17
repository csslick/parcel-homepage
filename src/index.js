import Header from "./component/Header";
import Footer from "./component/Footer";
import Visual from "./component/Visual";
import About from "./component/About";
import "./styles.css";

// show content 
function show_content() {
  document.getElementById("app").innerHTML = `
  ${Header()}
  ${document.querySelector("title").innerHTML === "Home" ? Visual() : ""}
  ${document.querySelector("title").innerHTML === "About" ? About() : ""}
  ${Footer()}
`;
}

// router
function router(a) {
  switch(a) {
    case "": 
      document.querySelector('title').innerHTML = 'Home';
      document.querySelector('header h1').innerHTML = 'Home';
      show_content()
      
      break;
    case "about.html": 
      document.querySelector('title').innerHTML = 'About';
      document.querySelector('header h1').innerHTML = 'About';
      show_content()
      break;
    
      default: break;
  }
}

// link & router
const link = document.querySelectorAll('#gnb a');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(e){
    e.preventDefault();
    const a = this.getAttribute('href').slice(2);
    console.log(a)

    router(a);
  })
}


// 콘텐츠 랜더링
show_content();