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
