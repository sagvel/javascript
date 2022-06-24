const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  set addSeconds(secondsPassed) {
    // console.log(this.getTime());
    this.secondsPassed = secondsPassed;
    this.secondsPassed += 1;
  },

  startTimer() {
    console.log(this.getTime());
    setInterval(this.addSeconds, 1000, this.secondsPassed);
  },

  getTime() {
    return `${this.minsPassed}.${this.secondsPassed}`;
  },
};

timer.startTimer();

// console.log(timer.getTime());
