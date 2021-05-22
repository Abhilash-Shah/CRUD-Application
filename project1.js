let superheroes=[
    {
      name:"Thor",
      age:1500 ,
      planet:"Asgard",
      height:"6.3" 
    },
    {
        name:"Iron Man",
        age:34 ,
        planet:"Earth",
        height:"5.10" 
      },
      {
        name:"Caption America",
        age:101 ,
        planet:"Earth",
        height:"5.2" 
      },
];
function display(superarray){
  let tabledata="";
  let srno=1;
  superarray.forEach(function(superhero,index){
    let currentrow=`<tr>
    <td>${index+1}</td>
    <td>${superhero.name}</td>
    <td>${superhero.age}</td>
    <td>${superhero.planet}</td>
    <td>${superhero.height}</td>
    <td>
    <button onclick='deleteSuperhero(${index})'>delete</button>
    <button onclick='showModal()'>update</button>
    </td>
    </tr>`;

    tabledata+=currentrow;
    srno++;
  });
  // document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
document.getElementById("tdata").innerHTML=tabledata;
}

display(superheroes);
function addSuperhero(e){
  e.preventDefault();
  let superhero={};
  let name=document.getElementById('name').value;
  let age=document.getElementById('age').value;
  let planet=document.getElementById('planet').value;
  let height=document.getElementById('height').value;

  superhero.name=name;
  superhero.age=Number(age);
  superhero.planet=planet;
  superhero.height=height;

  superheroes.push(superhero);
  console.log(superheroes);
  
  display(superheros);

   document.getElementById('name').value="";
   document.getElementById('age').value="";
   document.getElementById('planet').value="";
   document.getElementById('height').value="";


}
function searchByName(){
  let searchValue=document.getElementById("searchName").value;
  let newdata=superheroes.filter(function(superhero){
    return superhero.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
 
    });
display(newdata);
}

function deleteSuperhero(index){
  superheroes.splice(index,1);
  display(superheroes);
}
function showModal(event){
  let modal=document.getElementsByClassName("modal")[0];
  modal.style.display="block";
}
function hideModal(event){
  if(event.target.classname!="modalchild"){
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display="none";
  }
}
