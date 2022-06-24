const callbackPromt = {
  message: 'Please enter phone number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  }
}

callbackPromt.showDeferredPrompt(5000)