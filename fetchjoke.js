const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#app').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#app').innerHTML = answer
  } catch (error) { console.error(error) }
}
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })