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
      const getInput = document.querySelector(".inputValue")
      getInput.addEventListener('input', function(event){
      const selectValue = document.querySelector(".selectedValues").value;
      const filtered = data.filter(user =>
        user[selectValue].includes(event.target.value));
        console.log(filtered);
      })
      const getBody = document.querySelector(".tbody")
      getBody.innerHTML = ""
      data.forEach(element =>
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
