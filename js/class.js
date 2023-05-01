
class FormApp {
    inputName =document.querySelector("#inputName")
    inputEmail =document.querySelector("#Email")
    inputJob =document.querySelector("#Job")
    tbody =document.querySelector("#tbody")
     btn =document.querySelector("#btn")
    data =[];
    gameName =null

constructor(gameName){
  this.gameName=gameName
}

getValue(){

  var fullName =this. inputName.value;
  var email =this.inputEmail.value;
  var job =this.inputJob.value
  //console.log(fullName,email,job)
  
  var person ={
      fullName,
      email,
      job
  }
  //console.log(person)
  this.data.push(person)
  
  this.tbody.innerHTML =this.data.map(function(item,index){
  
      return `          <tr class="table-light ">
      <td class="table-light">${index+1}${item.fullName}</td>
      <td class="table-light">${item.email}</td>
      <td class="table-light">${item.job}</td>
    </tr> 
  `
  }).join("")
  this.inputName.value =""
  this.inputEmail.value =""
  this.inputJob.value =""

console.log(person)
}


// showalert(){



// }
}

var person1 =new FormApp("Sabuhi")
person1.btn.addEventListener("click",function(){
  person1.getValue()
})
