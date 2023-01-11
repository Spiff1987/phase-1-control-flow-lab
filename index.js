function scuberGreetingForFeet(Number){
  // Write your code here!
  if(Number <= 400){
    return "This one is on me!";
  }
  else if(Number > 400 && Number < 2000){
    return "That will be twenty bucks."
  }
  else if(Number > 2000 && Number < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if(Number > 2500)
    return "No can do."

  }
  

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return 'Thank you so much.'
    case "not as generous":
      return 'Thank you.'
    default: "Thanks for everything"
      return 'Bye.'
  }
}