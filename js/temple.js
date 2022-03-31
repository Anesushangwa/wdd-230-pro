const requestURL = '';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  const temples = jsonObject['temples'];

  temples.forEach(displayTemple);
  });

 


function displayTemple(temple) {
    // date of birth , birth place and temple images
   const card = document.createElement('section');
   const p1 = document.createElement('p');
   const h2 = document.createElement('h2');
   const p2 = document.createElement('p');
   const image = document.createElement('img');

    h2.textContent = `${temple.name} ${temple.lastname}`;
    card.appendChild(h2);
    
    p1.textContent = `Date of Birth: ${temple.birthdate}`;
    card.appendChild(p1);

    p2.textContent = `Place of birth: ${temple.birthplace}`;
    card.appendChild(p2);
  
    image.src = temple.imageurl;
    image.setAttribute('alt', temple.order);
    card.appendChild(image);
  
  
    document.querySelector('div.cards').appendChild(card);
  
  }