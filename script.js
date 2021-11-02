let loadUser =()=> {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    const getBody = document.querySelector(".tbody")
    getBody.innerHTML = ""
    const name = data.forEach(element =>
      getBody.innerHTML += `
      <tr>
        <th scope="row">1</th>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
      </tr>
      `)

  })
}
window.onload =()=> {
  loadUser()
}

// const dataWithAsync = async () => {
//
//         let response = await fetch('url');
//
//         let data = await response.json()
//
//         return data
//
// }
