function buttonClickCount() {
  let counter = parseInt(document.getElementById('counter').value, 10);
  counter += 1;
  document.getElementById('counter').value = counter;
}
