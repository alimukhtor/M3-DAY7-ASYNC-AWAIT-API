const tableData =(info)=>`
<tr>
  <td>${info.name}</td>
  <td>${info.username}</td>
  <td>${info.email}</td>
  <td>${info.phone}</td>
</tr>`
let loadUser = async()=> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const result =  await response.json()
    console.log(result)
    const getBody = document.querySelector(".tbody")
    getBody.innerHTML = ""
    const name = result.forEach(element =>
      getBody.innerHTML += tableData(element)

    )
}
window.onload =()=> {
  loadUser()
}
