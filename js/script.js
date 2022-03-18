var elList = document.querySelector(".movies__list");
var elSelect = document.querySelector(".select");
var elForm = document.querySelector(".form")


var generateGenres = function(films) {
  var fliteredGenres = []

  films.forEach(film => {
    film.genres.forEach(genre => {
      if(!fliteredGenres.includes(genre)){
        fliteredGenres.push(genre)
      }
    })
  });

  fliteredGenres.forEach(genre => {
    var newOption = document.createElement("option")

    newOption.value = genre
    newOption.textContent = genre

    elSelect.appendChild(newOption)
  })
}

var renderFilms = function(filmsArray, element) {
  filmsArray.forEach(movie => {
    //CREATE
    var newItem = document.createElement('li')
    var newCard = document.createElement('div')
    var newImg = document.createElement('img')
    var newCardBody = document.createElement('div')
    var newCardTitle = document.createElement('h5')
    var newCardGenres = document.createElement('ul')

    movie.genres.forEach(genre => {
      var newGenre = document.createElement('li')

      newGenre.textContent = genre

      newCardGenres.appendChild(newGenre)
    })

    //SET ATTRIBUTE
    newItem.setAttribute('class', 'movies__item')
    newCard.setAttribute('class', 'card')
    newCard.style.width = '18rem'
    newImg.setAttribute('class', 'card-img-top')
    newImg.setAttribute('src', movie.poster)
    newCardBody.setAttribute('class', 'card-body')
    newCardTitle.setAttribute('class', 'card-title')

    //TEXT CONTENT
    newCardTitle.textContent = movie.title

    //APPEND
    element.appendChild(newItem)
    newItem.appendChild(newCard)
    newCard.appendChild(newImg)
    newCard.appendChild(newCardBody)
    newCardBody.appendChild(newCardTitle)
    newCardBody.appendChild(newCardGenres)
  })
}

renderFilms(films, elList)
generateGenres(films)

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  elList.innerHTML = null;

  var selectValue = elSelect.value;

  var filteredFilms = []

  films.forEach(film => {
    if(selectValue === "all" || film.genres.includes(selectValue)){
      filteredFilms.push(film)
    }
  })

  renderFilms(filteredFilms, elList)
})