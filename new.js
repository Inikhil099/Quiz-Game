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
  if (start >= results.length) {
    document.body.style.backgroundColor = 'black'
    document.body.appendChild(def)
    console.log("quiz over");
    return;
  }
  def.remove()
  let score = 0;

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
        console.log("correct ans");
      } 
      else {
        e.target.style.backgroundColor = "red";
        document.body.style.backgroundColor = "red";
        return;
      }
      start++
      setTimeout(() => {
        document.body.removeChild(display);
        getdata(); // next question 
      }, 0);
    });
  });


  // <---------------------------------------------------------------------------> appending elements
  display.appendChild(p);
  display.appendChild(timer);
  display.appendChild(option);
  document.body.appendChild(display);

  // <------------------------------------------------------------------------------->

  let max_time = 30;
  timer.innerText = max_time;
  let int = setInterval(() => {
    max_time--;
    timer.innerText = max_time;
    if (max_time <= 0) {
      clearInterval(int);
      timer.innerText = "Time UP";
      timer.style.color = "red";
      start++;
      setTimeout(() => {
        // document.body.removeChild(display);
        display.remove()
        getdata(); // next question
      }, 1000);
    }
  }, 1000);
} // end of getdata func

st.addEventListener("click", getdata);
