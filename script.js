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
      const getInput = document.querySelector(".inputValue")
      getInput.addEventListener('input', function(event){
      const selectValue = document.querySelector(".selectedValues")
      const filtered = data.filter(user =>
        user[getInput].includes(event.target.value))
        console.log(filtered);
      })
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
