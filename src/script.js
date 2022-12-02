const dogButton = document.querySelector('#new-dog'); // Try edit me
const imgDiv = document.querySelector('#header');
const getNewDog = ()=>{
// Log to console
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json=>
{imgDiv.innerHTML=`<img src='${json.message}' width=490 />`});

}
dogButton.onclick = () => {getNewDog ()}






