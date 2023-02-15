const api_url ="https://api.quotable.io/random";

async function getapi(url)
{
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  });
  var data = await response.json();
<<<<<<< HEAD
=======
  
>>>>>>> 4db62923d23dfbd84fcf13c020bfc47b46f6282d
  document.querySelector('#quote-content').textContent = data.content;
  document.querySelector('#quote-author').textContent = `~${data.author}`;
}
getapi(api_url);


