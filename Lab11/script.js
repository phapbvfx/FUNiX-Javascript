const poll = {
  question: "What is your favourite programing language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer(type) {
    let answer = Number(
      prompt(`${this.question} \n 
          ${this.options[0]} \n
          ${this.options[1]} \n
          ${this.options[2]} \n
          ${this.options[3]} \n
          (Write option number)
          `)
    );

    if (!isNaN(answer) && answer < this.options.length) {
      this.numberOfVotes[answer] += 1;
    } else {
      alert("Câu trả lời không hợp lệ");
    }
  },

  displayResults(type) {
    if (typeof type === "string") {
      console.log(`Poll results are ${type}`);
    } else {
      console.log(type);
    }
  },
};

const register = poll.registerNewAnswer.bind(poll);
const displayResults = poll.displayResults.bind(poll);

const btn = document.getElementById("btn-answer");

btn.addEventListener("click", () => {
  register();
  //test array
  displayResults(poll.numberOfVotes);
  //test string
  displayResults("1, 5, 3, 9, 6, 1");
});
