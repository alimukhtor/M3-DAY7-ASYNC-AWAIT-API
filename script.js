const tableData =(element)=>`
<tr>
  <td>${element.name}</td>
  <td>${element.username}</td>
  <td>${element.email}</td>
  <td>${element.phone}</td>
</tr>`
let loadUser = async()=> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data =  await response.json()
    console.log(data)
    const getBody = document.querySelector(".tbody")
    getBody.innerHTML = ""
    const name = data.forEach(element =>
    getBody.innerHTML += tableData(element)

    )
}
window.onload =()=> {
  loadUser()
}
