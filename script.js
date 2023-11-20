const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e03bbb7786480199e9557a9215f1094e"
}

const input = document.querySelector('#input');

input.addEventListener('keydown', enter);

function enter(e){
    if(e.keyCode === 13){
        getInfo(input.value)
    }
}

async function getInfo(data){
 const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
 const resReceived = await res.json();
 displayResult(resReceived);
 
}

function displayResult(resReceived){

// DATE:

getOurDate();

let city = document.querySelector('#city');
city.textContent = `${resReceived.name}, ${resReceived.sys.country}`;

let temperature = document.querySelector('#temperature');
temperature.innerHTML = `${Math.round(resReceived.main.temp)}<span>°</span>`;

let feelsLike = document.querySelector('#feelsLike');
feelsLike.innerHTML = `<span>Feels like:</span> ${Math.round(resReceived.main.feels_like)} <span>°</span>`

let conditions = document.querySelector('#conditions');
conditions.innerHTML = `${resReceived.weather[0].main}`;

let variation = document.querySelector('#variation');
variation.innerHTML = `<span>Min:</span> ${Math.round(resReceived.main.temp_min)} <span>°</span> <span>Max:</span> ${Math.round(resReceived.main.temp_max)} <span>°</span>`;
}

function getOurDate(){

    

    const myDate = new Date();
  
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[myDate.getDay()];
   

    let number = myDate.getDate();
  
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[myDate.getMonth()];

   
    let year = myDate.getFullYear();

    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + " " + `${number}` + " " + `${month}` + " " + `${year}`

    

}

let colors = ['#40DFEF','#D18CE0','#FFF47D'];

gsap.to('#container', {opacity: 1, duration: 7, repeat: 10, repeatDelay: .6, backgroundColor: function(i){
    return colors[i%3]
}})




gsap.to('#input', {
  y: 20,
  duration: 1,
  ease: "power1.in"
})


/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 200,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });