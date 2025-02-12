const pokemonNameElement = document.getElementById("pokemon-name");
const pokemonImageElement = document.getElementById("pokemon-image");

// Elementi per le statistiche
const pokemonHpElement = document.getElementById("pokemon-hp");
const pokemonAttackElement = document.getElementById("pokemon-attack");
const pokemonDefenseElement = document.getElementById("pokemon-defense");
const pokemonSpecialAttackElement = document.getElementById(
  "pokemon-special-attack"
);
const pokemonSpecialDefenseElement = document.getElementById(
  "pokemon-special-defense"
);
const pokemonSpeedElement = document.getElementById("pokemon-speed");

let currentPokemonId = 1;

async function getPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    //  il nome e l'immagine del Pokémon
    pokemonNameElement.textContent =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonImageElement.src = pokemon.sprites.front_default;

    // statistiche del Pokémon
    pokemonHpElement.textContent = pokemon.stats[0].base_stat; // HP
    pokemonAttackElement.textContent = pokemon.stats[1].base_stat; // Attacco
    pokemonDefenseElement.textContent = pokemon.stats[2].base_stat; // Difesa
    pokemonSpecialAttackElement.textContent = pokemon.stats[3].base_stat; // Attacco Speciale
    pokemonSpecialDefenseElement.textContent = pokemon.stats[4].base_stat; // Difesa Speciale
    pokemonSpeedElement.textContent = pokemon.stats[5].base_stat; // Velocità
  } catch (error) {
    console.error("Errore durante il recupero del Pokémon:", error);
  }
}

async function getRandomPokemon() {
  //numero casuale per selezionare un Pokémon
  currentPokemonId = Math.floor(Math.random() * 898) + 1;
  getPokemon(currentPokemonId);
}

function getNextPokemon() {
  currentPokemonId = (currentPokemonId % 898) + 1;
  getPokemon(currentPokemonId);
}

function getPreviousPokemon() {
  currentPokemonId = ((currentPokemonId - 2 + 898) % 898) + 1;
  getPokemon(currentPokemonId);
}

getRandomPokemon();

// Funzione per determinare il colore in base al valore della statistica
function getStatColor(value) {
  if (value <= 30) {
    return "#3b82f6"; // Blu (per valori bassi)
  } else if (value <= 50) {
    return "#34d399"; // Verde chiaro (per valori moderatamente bassi)
  } else if (value <= 70) {
    return "#fbbf24"; // Giallo (per valori medi)
  } else if (value <= 90) {
    return "#f97316"; // Arancione (per valori abbastanza alti)
  } else if (value <= 110) {
    return "#ef4444"; // Rosso (per valori alti)
  } else if (value <= 130) {
    return "#8b5cf6"; // Viola chiaro (per valori molto alti)
  } else if (value <= 150) {
    return "#e11d48"; // Magenta (per valori massimi)
  } else {
    return "#000000"; // Nero (valori oltre il massimo, come default)
  }
}

async function getPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    // Nome e immagine del Pokémon
    pokemonNameElement.textContent =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonImageElement.src = pokemon.sprites.front_default;

    // Statistiche del Pokémon con colori dinamici
    pokemonHpElement.textContent = pokemon.stats[0].base_stat; // HP
    pokemonHpElement.style.color = getStatColor(pokemon.stats[0].base_stat);

    pokemonAttackElement.textContent = pokemon.stats[1].base_stat; // Attacco
    pokemonAttackElement.style.color = getStatColor(pokemon.stats[1].base_stat);

    pokemonDefenseElement.textContent = pokemon.stats[2].base_stat; // Difesa
    pokemonDefenseElement.style.color = getStatColor(
      pokemon.stats[2].base_stat
    );

    pokemonSpecialAttackElement.textContent = pokemon.stats[3].base_stat; // Attacco Speciale
    pokemonSpecialAttackElement.style.color = getStatColor(
      pokemon.stats[3].base_stat
    );

    pokemonSpecialDefenseElement.textContent = pokemon.stats[4].base_stat; // Difesa Speciale
    pokemonSpecialDefenseElement.style.color = getStatColor(
      pokemon.stats[4].base_stat
    );

    pokemonSpeedElement.textContent = pokemon.stats[5].base_stat; // Velocità
    pokemonSpeedElement.style.color = getStatColor(pokemon.stats[5].base_stat);
  } catch (error) {
    console.error("Errore durante il recupero del Pokémon:", error);
  }
}
