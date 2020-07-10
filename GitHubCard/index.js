import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards')
const githubUrl='https://api.github.com/users/arianahabas'
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get(githubUrl)
  .then((response) => {
    cards.appendChild(userCardMaker(response))
  })
  .catch(() => {
    console.log('you suck')
  })
  /*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];


/*STEP 3: Create a function that accepts a single object as its only argument.
Using DOM methods and properties, create and return the following markup:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/




function userCardMaker (user){
  //instantiate elements
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  //set classes for elements
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')
//add content from user
  userImg.src = user.data.avatar_url
  profileAddress.setAttribute('href', user.data.html_url) 
  profileAddress.textContent = user.data.html_url
  name.textContent = user.data.name
  username.textContent = user.data.login
  location.textContent = `Location: ${user.data.location}`
  profile.textContent = 'Profile: '
  followers.textContent = `Followers: ${user.data.followers}`
  following.textContent = `Following: ${user.data.following}`
  bio.textContent =`Bio: ${user.data.bio}`
   //append children- format
   cards.appendChild(card)
   card.appendChild(userImg)
   card.appendChild(cardInfo)
   cardInfo.appendChild(name)
   cardInfo.appendChild(username)
   cardInfo.appendChild(location)
   cardInfo.appendChild(profile)
   cardInfo.appendChild(profileAddress)
   cardInfo.appendChild(followers)
   cardInfo.appendChild(following)
   cardInfo.appendChild(bio)
   profile.appendChild(profileAddress)
  console.log(location)
  console.log(name)

  return card

}

followersArray.forEach((person) => {
  axios
  .get(`https://api.github.com/users/${person}`)
   .then( (value) =>{
    cards.appendChild(userCardMaker(value.data))
  })
  .catch( (error) => {
    console.log(error)          
  })
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/