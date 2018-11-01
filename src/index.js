document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  let divContainer = document.getElementById('pokemon-container')
  displayPokemon(POKEMON)
  
  const pokemonSearch = document.getElementById('pokemon-search-input')
  let word = ""

  //filter through the pokemon
  // event listener begins
  pokemonSearch.addEventListener('keydown', function(event){
    let userInput = event.key.toLowerCase()
    let filteredPokemon = []
    if(userInput === 'backspace'){
      word = word.slice(0, -1)
    } else{
      word += userInput
    }
    //
  
      filteredPokemon = POKEMON.filter(function(pokemon){
        return pokemon.name.includes(word) 
      })
      console.log(filteredPokemon)

    displayPokemon(filteredPokemon)

  })

  //display the pokemon, outside of event listener hehe

  function displayPokemon(pokemons){
    divContainer.innerHTML = ""
    pokemons.forEach(function(pokemon){
   
      let outerDiv = document.createElement('div')
      outerDiv.className = 'pokemon-container'
      divContainer.appendChild(outerDiv)

      let innerDiv = document.createElement('div')
      innerDiv.className = 'pokemon-frame'
      outerDiv.appendChild(innerDiv)

      let characterName = document.createElement('h1')
      characterName.className ='center-text'
      characterName.innerText = `${pokemon.name}`
      innerDiv.appendChild(characterName)

  })

  }


})


