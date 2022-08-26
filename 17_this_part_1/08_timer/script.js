const timer = {
  secondsPassed: 0,
  intervalID: 0,

  addSeconds(secondsPassed) {
    this.secondsPassed = secondsPassed;
    console.log(this.secondsPassed);
    this.secondsPassed++;
  },

  startTimer() {
    this.intervalID = setInterval(() => this.addSeconds(this.secondsPassed), 1000);
  },

  stopTimer() {
    clearInterval(this.intervalID);
  },
};

// timer.startTimer()
// timer.stopTimer()
// timer.startTimer()

// console.log(timer.secondsPassed);
