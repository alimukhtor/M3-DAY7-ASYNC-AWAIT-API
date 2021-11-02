const tableData =(info)=>`
<tr>
  <td>${info.name}</td>
  <td>${info.username}</td>
  <td>${info.email}</td>
  <td>${info.phone}</td>
</tr>`
let loadUser =()=> {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const getBody = document.querySelector(".tbody")
    getBody.innerHTML = ""
    const name = data.forEach(element =>
      getBody.innerHTML += tableData(element)

    )
  })
}
window.onload =()=> {
  loadUser()
}
