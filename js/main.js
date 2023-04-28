var data =[];

btn.addEventListener("click",function(){

var fullName = inputName.value;
var email =inputEmail.value;
var job =inputJob.value
//console.log(fullName,email,job)

var person ={
    fullName,
    email,
    job
}
//console.log(person)
data.push(person)

tbody.innerHTML =data.map(function(item,index){

    return `          <tr class="table-light ">
    <td class="table-light">${index+1}${item.fullName}</td>
    <td class="table-light">${item.email}</td>
    <td class="table-light">${item.job}</td>
  </tr> 
`
}).join("")
inputName.value =""
inputEmail.value =""
inputJob.value =""

})

