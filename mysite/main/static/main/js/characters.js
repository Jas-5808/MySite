//Dom element
const description = document.querySelector(".description");
const descriptionDiv = document.querySelector(".description_img");
const descriptionImg = document.querySelector(".info_img");
const parents = document.querySelector(".characterBlock");
const info = document.querySelector(".info");
const statusCharacters = document.querySelector(".status_characters");

//url
const characters = 'https://rickandmortyapi.com/api/character/?page=';
const character = 'https://rickandmortyapi.com/api/character/'; //alternative
let index = 1;
let count = 0
let statusChar;

//charactersMassive
let array=[];

//API
let APIPage = (index)=> fetch(characters + index).then((response) => {return response.json();});
let APICharacter = (id) => fetch(character + id).then((response) => {return response.json();}); //alternative
let addCharacters = (data) =>{
    //Add Dom
      for (let i = 0; i < 20; i++) {
          parents.insertAdjacentElement("beforeend", document.createElement('img'));
          parents.children[count + i].classList.add('characterImg');
          parents.children[count + i].id = data.results[i].id;
          parents.children[count + i].setAttribute("src", `${data.results[i].image}`);
          array[count + i] = data.results[i];
      }
      count += 20;
}
APIPage(index).then(addCharacters);

//Add info
parents.addEventListener("click", event => {
    statusChar = event.target.id - 1;
    if(event.target.classList != 'characterBlock') {
        description.style.transform = "rotateX(0deg)";
        description.style.animation = "animations .6s linear alternate";
        setTimeout(description.style.animation = "", 1000);
        descriptionImg.setAttribute("src", `${event.target.getAttribute("src")}`);
        info.children[0].innerText = `Name: ${array[event.target.id - 1].name}`;
        info.children[1].innerText = `Gender: ${array[event.target.id - 1].gender}`;
        info.children[2].innerText = `Species: ${array[event.target.id - 1].species}`;
        info.children[3].innerText = `Status: ${array[event.target.id - 1].status}`;
    }
});

//IMG Info status
descriptionDiv.addEventListener("mouseover", event => {
    if(array[statusChar].status == "Alive") statusCharacters.style.backgroundImage = `url( static/main/img/ALIVE.svg)`;
    else if(array[statusChar].status == "unknown") statusCharacters.style.backgroundImage = `url( static/main/img/unknown.svg)`;
    else document.querySelector(".status_characters").style.backgroundImage = `url( static/main/img/DEATH.svg)`;
})
descriptionDiv.addEventListener("mouseleave", event =>{document.querySelector(".status_characters").style.backgroundImage = "url()"})

//Characters Scroll
parents.addEventListener("wheel", event => {
    event.currentTarget.scrollLeft += event.deltaY;
    let max = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;
    if(--max <= event.currentTarget.scrollLeft){APIPage(++index).then(addCharacters);}
});

