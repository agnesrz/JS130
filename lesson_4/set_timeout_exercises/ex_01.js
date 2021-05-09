function delayLog() {
  for (let num = 1; num <= 10; num += 1) {
    setTimeout(() => console.log(num), (num * 1000));
  }
}

delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10