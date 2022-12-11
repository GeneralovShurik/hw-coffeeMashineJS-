
const WaterTank = 1200;
const CoffeeTank = 500;
let currentWaterTank = WaterTank;
let currentCoffeeTank = CoffeeTank;

/*const button1 = document.querySelector('.btn');
button1.addEventListener('click', makeCoffee)*/

  function makeCoffee (water, coffee){
    this.water = water;
    this.coffee = coffee;
    if (currentWaterTank < water) {
        alert("Заполните бак с водой");
    } else if (currentCoffeeTank < coffee) {
        alert("Заполните бак с кофе");
    } else {
        currentWaterTank -= water;
        currentCoffeeTank -= coffee;{
            alert("Ваш кофе готов");
        }
    }
    console.log(currentWaterTank,currentCoffeeTank);  
  }
  
  /*const button4 = document.querySelector('.btnWTank');
  button4.addEventListener('click', fillTheWaterTank)*/
  function fillTheWaterTank(){
    currentWaterTank = WaterTank;
    alert('Бак с водой заполнен');
    }
  
  /*const button5 = document.querySelector('.btnCTank');
  button5.addEventListener('click', fillTheCoffeeTank)*/ 
  function fillTheCoffeeTank(){
    currentCoffeeTank = CoffeeTank;
    alert('Бак с кофе заполнен');
    }
 
   // document.getElementById("cw").style.width = currentCoffeeTank;