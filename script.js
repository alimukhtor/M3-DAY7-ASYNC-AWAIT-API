const tableData =(element)=>`
<tr>
  <td>${element.name}</td>
  <td>${element.username}</td>
  <td>${element.email}</td>
  <td>${element.phone}</td>
</tr>`
let loadUser = async()=> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(response.ok){
      const data =  await response.json()
      console.log(data);
      const getBody = document.querySelector(".tbody")
      getBody.innerHTML = ""
      const name = data.forEach(element =>
        getBody.innerHTML += tableData(element)

      )
    }else{
       throw new Error("Users are not fetched!");
    }
  } catch (error) {
    throw error;
    }
}

window.onload =()=> {
  loadUser()
}
