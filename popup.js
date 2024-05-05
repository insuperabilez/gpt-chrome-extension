document.getElementById('sendRequest').addEventListener('click', function() {
  var text = document.getElementById('inputText').value;
  var url = 'https://gpt-server-thyx.onrender.com/gpt?text=' + encodeURIComponent(text);
  document.getElementById('response').textContent = "Обработка запроса...";
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('response').textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});