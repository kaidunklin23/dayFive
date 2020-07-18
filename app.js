function kayBouncer(arr) {
    let kayArray = [];
    for (var k = 0; k < arr.length; k++) {
      if (arr[k]) kayArray.push(arr[k]);
    }
    return kayArray;
  }

  console.log(kayBouncer([1,"kay",false,"nugget",5]));

  function kayChunkArrays(kArr, size) {
   
    var kayArr = [];
    var a = 0;
  
    while (a < kArr.length) {
      kayArr.push(kArr.slice(a, a + size));
      a += size;
    }
    return kayArr;
  }
  
  console.log(kayChunkArrays(["l", "m", "n", "o"], 2));
  
  function dog()  {
      name =  'winston';
      color = 'black';
      numLegs = 4;
  }
  console.log(dog.color);


  let kaija = {
    name: 'Kesha',
    food: 'nuggets',
    color: 'pink',
    sayColor: function() {
        return "Her favorite color is " + kaija.color +"."
      }
};
console.log(kaija.sayColor());

function raja() {
    this.name = 'roggie';
    this.eyes = 3;
    this.mood = 'negative';
}
let anger = new raja();

anger.mood ='positive';

console.log(anger.mood);
  
function Room(numLights) {
    this.numLights = numLights;
  }
  
  let myRoom = new Room(4);
  myRoom instanceof Room;

  console.log(myRoom);

  function Aunt(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let money = new Aunt("bank");
  let ownProp = [];

  for (let house in money) {
    if (money.hasOwnProperty(house)) {
      ownProp.push(house);
    }
  } 
  let Uncle = new Aunt('Shane');



