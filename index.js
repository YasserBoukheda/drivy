'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);



function getDays (beginDate, returnDate)  {

var Bbegin = new Date(beginDate);
var Eend = new Date(returnDate);
var Begin = Bbegin.getTime()/86400000;
var End = Eend.getTime()/86400000;
return (End-Begin) + 1;
}


// Exercice 1 

function getPrice(){

var numberofkm =0 ;
var NumberofDays =0 ;
var carspriceperkm =0 ;
var carspriceperday =0 ;
var rentalPrice =0 ;

for (var i=0; i<rentals.length;i++) { // scanning all the rentals data to find each datum needed
  for (var j=0; j<cars.length;j++) { // scanning all thecars data to find each datum we need
    if (cars[j].id==rentals[i].carId) { //matching id cars from rentals and from cars

       NumberofDays = getDays(rentals[i].pickupDate,rentals[i].returnDate); 
       //NumberofDays = NumberofDaysM*0.001/(60*60*24); //convert milliseconds into days
       console.log(NumberofDays);
       carspriceperday = cars[j].pricePerDay; // Take each car's price per day
       console.log(carspriceperday);
       carspriceperkm = cars[j].pricePerKm; // take each car's price per km
       numberofkm = rentals[i].distance; // Take each achieved distance for each car
       rentalPrice = NumberofDays*carspriceperday + numberofkm*carspriceperkm; // compute the rental Price according to the exercise rule
       rentals[i].price = rentalPrice; // replacing the old price by the computed price to update the data
    }

  }

}
console.log(rentals);
}

// Exercice 2 

function getPrice2(NumberofDays){

var numberofkm =0 ;
var NumberofDays =0 ;
var carspriceperkm =0 ;
var carspriceperday =0 ;
var rentalPrice =0 ;

for (var i=0; i<rentals.length;i++) { // scanning all the rentals data to find each datum needed
  for (var j=0; j<cars.length;j++) { // scanning all thecars data to find each datum we need
    if (cars[j].id==rentals[i].carId) { //matching id cars from rentals and from cars

       NumberofDays = getDays(rentals[i].pickupDate,rentals[i].returnDate); //convert milliseconds into days
       console.log(NumberofDays);
       carspriceperday = cars[j].pricePerDay; // Take each car's price per day
       console.log(carspriceperday);
       carspriceperkm = cars[j].pricePerKm; // take each car's price per km
       numberofkm = rentals[i].distance; // Take each achieved distance for each car
       rentalPrice = NumberofDays*carspriceperday + numberofkm*carspriceperkm; // compute the rental Price according to the exercise rule
      if ( NumberofDays > 1 && NumberofDays < 4)
       rentals[i].price = rentalPrice - 0.1*rentalPrice; // replacing the old price by the computed price to update the data

      if (NumberofDays>4&&NumberofDays<10){
        rentals[i].price = rentalPrice - 0.3*rentalPrice;
      }
      
      if  (NumberofDays>10){
        rentals[i].price = rentalPrice - 0.5*rentalPrice;
      }
      }
    }

  }

}

//Exercice 3

function com(){
  var rprice=0;
  var commission=0;
  var assurance = 0; 
  var time =0;
  var assistance=0;
  var drivy =0;

for (var i =0; i<rentals.length;i++){ // computing and replacing the values of the commission

commission=(0.3*rentals[i].price);
assurance = (0.5*commission);
time=getDays(rentals[i].pickupDate,rentals[i].returnDate);
assistance = time ;
drivy = commission - (assurance + assistance);
rentals[i].commission.insurance=assurance;
rentals[i].commission.assistance=assistance;
rentals[i].commission.drivy=drivy;

}

}

// Exercice 4 

function reduc(){
for (var i = 1; i<rentals.length;i++){

if(rentals[i].options.deductibleReduction){ // checking if ther is an option and computing the new price 

rentals[i].price=rentals[i].price + 4*getDays(rentals[i].pickupDate,rentals[i].returnDate); 

}

}

}

// Exercice 5 

function pay(){
var k=actors[0].payment.length;
for (var i=0; i<rentals.length;i++){ // updating payment for each case 
  for (var j=0;j<k;j++){
    switch(j){
      case 0 : 
      actors[i].payment[j].amount=rentals[i].price; // according to the exercise for each case
      break 
      case 1 : 
      actors[i].payment[j].amount=rentals[i].price - rentals[i].price*0.3;
      break;

      case 2 : 
      actors[i].payment[j].amount=rentals[i].commission.insurance; 
      break;

      case 3 : 
      actors[i].payment[j].amount=rentals[i].commission.assistance;
      break;

      case 4 : 
      actors[i].payment[j].amount=rentals[i].commission.drivy;
      break;

    }
  }

}

}

// Exercice 6 

function modif(){

var olddrivy=drivy;
var delta;
var oldprice=rentalPrice;
var oldcom=commission;
var oldassurance=assurance;
var oldassistance=assistance;

for (var i =0;i<rentals.length;i++){ // for each modification computing the new price
  for (var j=0;j<rentalModifications.length;j++){
    if(k!=0){
      NumberofDays=getDays(rentals[i].returnDate,rentalModifications[k].pickupDate);
      decreasing();
      getPrice(); // trying to change the variable numberOfdays for computing the price with modifications but it doesn't work
      delta=oldprice-rentalPrice; //computing the delta
      if(delta>0){
        rentalPrice=rentalPrice - delta;
        else{
          rentalPrice=rentalPrice + delta;

        }
        reduc();
        pay();
        com();
      }
    }
    else {
      //NumberofDays=getDays(rentals[i].returnDate,rentalModifications[k].pickupDate);
      decreasing();
      getPrice();
      delta=oldprice-rentalPrice;
      if(delta<0){
        rentalPrice=rentalPrice + delta;
        else{
          rentalPrice=rentalPrice - delta;

        }
        reduc();
        pay();
        com();
      }
    }
  }

}
