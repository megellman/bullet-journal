const api_url ="https://api.quotable.io/random";

async function getapi(url)
{
  const response = await fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS'
    },
  });
  var data = await response.json();
  console.log(data);
  document.querySelector('#quote-content').textContent = data.content;
  document.querySelector('#quote-author').textContent = `~${data.author}`;
}
getapi(api_url);