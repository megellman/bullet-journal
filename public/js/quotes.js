const api_url ="https://api.quotable.io/random";

async function getapi(url)
{
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  });
  var data = await response.json();
  document.querySelector('#quote-content').textContent = data.content;
  document.querySelector('#quote-author').textContent = `~${data.author}`;
}
getapi(api_url);


