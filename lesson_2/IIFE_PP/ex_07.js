(function countdown(start) {
  if (start >= 0) {
    console.log(start);
    countdown(start - 1);
  }
})(7);