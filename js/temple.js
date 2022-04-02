const requestURL = 'https://anesushangwa.github.io/wdd-230-pro/json/temple.json';
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
    
   const card = document.createElement('section');
   const image = document.createElement('img');
   const p1 = document.createElement('p');
   const h2 = document.createElement('h2');
   const p2 = document.createElement('p');
   const p3 = document.createElement('P');
   const p4 = document.createElement('p');
   const p5 = document.createElement('p');
   const btn = document.createElement('button')
   
   image.src = temple.imageurl;
   image.setAttribute('alt', temple.order);
   card.appendChild(image);
  //  btn.textContent = `Additional: ${temple.additional}`;
   
    btn.innerText = 'like';
    btn.setAttribute("class", "like");
    card.appendChild(btn);
  
    h2.textContent = `${temple.name} `;
    card.appendChild(h2);
    
    p1.textContent = `Address: ${temple.adrress}`;
    card.appendChild(p1);

    p2.textContent = `Telphone: ${temple.telphone}`;
    card.appendChild(p2);
    p5.textContent = `Email: ${temple.email}`;
    card.appendChild(p5);
  
    p3.textContent = `services: ${temple.services}`;
    card.appendChild(p3);

    p4.textContent = `Additional: ${temple.additional}`;
    card.appendChild(p4);
  
    // image.src = temple.imageurl;
    // image.setAttribute('alt', temple.order);
    // card.appendChild(image);
  
  
    document.querySelector('div.cards').appendChild(card);
  
  }