import './App.css';


const App=()=> {
  let totalAmount = 0;
 let animal = []
 let dogs = []
 let names = []
 let otherAnimals = []
  const animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
  ]
  const orders = [
    {product: "apple", amount: 250},
    {product: "orange", amount: 400},
    {product: "banana", amount: 100},
    {product: "mango", amount: 325}
  ]





//T1
//   let doggs = []
//   for (let i = 0; i < animals.length ; i++){
//     if(animals[i].species === 'dog')
//     dogs.push(animals[i]) 
//   }
//   console.log(doggs)
  

  
//   let animal = [];
//   for(let i = 0; i < animals.length; i++){
//     if(animals[i].species !== 'dog'){
//     animal.push(animals[i])
//     }
//   }
//   console.log (animals)
//   console.log (animal)

// var dogs = animals.filter(isDog)
// console.logs (dogs)
// console.log (animals)

//T2
//   for (let i = 0; i < animals.length ; i++){
//     if(animals[i].species !== 'dog')
//     otherAnimals.push(animals[i]) 
//   }
//   otherAnimals.reverse()
// console.log(otherAnimals)

// var notDog = function(animal){
//   return animal.species !== 'dog'
// }
// dogs = animals.filter(notDog)
// console.log(dogs)  
// console.log(animals)


// T3
// for (let i =0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }
// console.log(names)


// {animals.map(animal=>{
//   names.push(animal.name)
// })}
// console.log(names)

//T4
// for (let i = 0; i < orders.length; i++)
// {
//   totalAmount += orders[i].amount
// }
// console.log(totalAmount)


// let total = orders.reduce((previousValue, currentValue)=>{
//   return previousValue + currentValue.amount;
// }, 0)
// console.log(total)

return (
    <div className="App">
    
    </div>
  
  );
}

export default App;
