const userCardsContainer = document.getElementById('userCard');
const searchInput = document.getElementById('search');
const darkModeToggle = document.getElementById('dark');

let users = [];
let a = 0
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;
        displayUsers(users);
    })

function displayUsers(users) {
    userCardsContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <p>${user.address.city}, ${user.address.street}</p>
    `;
        userCardsContainer.appendChild(card);
    })
}



if (search) {
    search.addEventListener('input', (e1) => {
        const t1 = e1.target.value.toLowerCase().trim();

        const toza = users.filter(user => 
            (user.name && user.name.toLowerCase().includes(t1)) 
        );

        displayUsers(toza);
    });
}

displayUsers(users);















darkModeToggle.addEventListener('click', function () {
    a++
if(a % 2 ==0){document.head.innerHTML = `<style>

body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
    transition: background-color 0.3s, color 0.3s;

}
.container{
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
}
.header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
}
.header input{
padding: 10px;
font-size: 16px;
width: 70%;
border-radius: 10px;
border: none;
box-shadow: 0px 0px 10px 1px grey;
animation-duration: 3s;
animation-iteration-count: infinite;
animation-fill-mode:both;
}
.header button{
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
background-color: black;
color: white;
border-radius: 10px;
border: none;

}
button:hover{
    box-shadow:  0px 0px 20px 10px gray;
    transition: 0.4s;
}
.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
.card{
background-color: #f9f9f9;
border-radius:8px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
padding: 20px;
text-align: center;
transition: background-color 0.3s;
transition: 0.4s;
background:url(https://images.stockcake.com/public/6/a/7/6a7dfb00-5436-40b9-8110-63f6d78a0416_large/sunny-cloudy-sky-stockcake.jpg) no-repeat center/cover;
box-shadow: inset 0px 0px 10px 1px rgb(255, 5, 5);
}

.card:hover{
    box-shadow: 0px 0px 30px 1px rgb(194, 194, 194);
    transform: scale(1.08);
    box-shadow: inset 0px 0px 25px 2px rgb(0, 0, 255);

}
@keyframes add{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

input:focus{
animation-name: add;

}





</style>
`}


else{document.head.innerHTML = `<style>

body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: black;
    color: black;
    transition: background-color 0.3s, color 0.3s;

}
.container{
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
}
.header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
}
.header input{
padding: 10px;
font-size: 16px;
width: 70%;
border-radius: 10px;
border: none;
box-shadow: 0px 0px 20px 1px white;
animation-duration: 3s;
animation-iteration-count: infinite;
animation-fill-mode:both;
background-color:black;
color:white;
}
.header button{
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
background-color: white;
color: black;
border-radius: 10px;
border: none;

}
button:hover{
    box-shadow:  0px 0px 20px 10px gray;
    transition: 0.4s;
}
.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
.card{
background-color: #f9f9f9;
border-radius:8px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
padding: 20px;
text-align: center;
transition: background-color 0.3s;
transition: 0.4s;
background:url(https://images.stockcake.com/public/6/a/7/6a7dfb00-5436-40b9-8110-63f6d78a0416_large/sunny-cloudy-sky-stockcake.jpg) no-repeat center/cover;
box-shadow: inset 0px 0px 10px 1px rgb(255, 5, 5);
}

.card:hover{
    box-shadow: 0px 0px 30px 1px rgb(194, 194, 194);
    transform: scale(1.08);
    box-shadow: inset 0px 0px 25px 2px rgb(0, 0, 255);

}
@keyframes add{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

input:focus{
animation-name: add;

}





</style>
`}


})








































































































































































































