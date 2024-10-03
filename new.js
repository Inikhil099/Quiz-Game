let st = document.querySelector(".st");
let def = document.querySelector(".default");

let results = [
  {
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"],
    question: "What is the romanized Japanese word for &quot;university&quot;?",
  },

  {
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"],
    question:
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    type: "multiple",
  },

  {
    correct_answer: "Bobby Henderson",
    incorrect_answers: ["Eric Tignor", "Bill Nye", "Zach Soldi"],
    question: "Who invented Pastafarianism?",
  },
];

let start = 0;

function getdata() {

  let score = 0;


  if (start >= results.length) {
    document.body.style.backgroundColor = 'black'
    document.body.appendChild(def)
    console.log("quiz over");
    start = 0
    console.log("Your Score is " + score)
    document.body.appendChild(def);
    st.addEventListener('click',getdata)
    return;
  }

  def.remove()

  let display = document.createElement("div");
  display.className = "display";

  let p = document.createElement("p");
  p.className = "ques";
  p.innerHTML = results[start].question;

  let timer = document.createElement("p");
  timer.className = "timer";

  let option = document.createElement("div");
  option.className = "options";

  // <--------------------------------------------------------------------------> creating option buttons

  let newresults = [...results[start].incorrect_answers,results[start].correct_answer,];
  newresults.forEach((element) => {
    //   const random = Math.floor(Math.random() * newresults.length);
    let op = document.createElement("button");
    op.className = "op";
    op.innerHTML = element
    option.appendChild(op);

     //   const random = Math.floor(Math.random() * newresults.length);
    op.addEventListener("click", (e) => {
      if (e.target.innerText === results[start].correct_answer) {
        e.target.style.backgroundColor = "green";
        document.body.style.backgroundColor = "green";
        score += 10;
        console.log("correct ans");
        document.querySelectorAll('.op').forEach((r)=>{
          r.disabled = true;
        })
      } 
      else {
        e.target.style.backgroundColor = "red";
        document.body.style.backgroundColor = "red";
        document.querySelectorAll('.op').forEach((r)=>{
          r.disabled = true;
        })
      }
      start++
      setTimeout(() => {
        document.body.removeChild(display);
        getdata(); // next question 
      }, 1000);
    });
  });


  // <---------------------------------------------------------------------------> appending elements
  display.appendChild(p);
  display.appendChild(timer);
  display.appendChild(option);
  document.body.appendChild(display);

  // <------------------------------------------------------------------------------->

  let max_time = 3;
  timer.innerText = max_time;
  let int = setInterval(() => {
    max_time--;
    timer.innerText = max_time;
    if(max_time <= 0) {
      clearInterval(int);
      timer.innerText = "Time UP";
      timer.style.color = "red";
      start++;
      setTimeout(() => {
        display.remove()
        getdata(); // next question
      }, 1000);
    }
  }, 1000);
} // end of getdata func

st.addEventListener("click", getdata);
