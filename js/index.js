// DOMContentLoaded event "Loads HTML content before prompts"
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

function vendingMachine() {

  // Initialize Variables
  var userMoney = 0;
  var itemCode;
  var userChange;
  var vendItem = "";
  var listedItems;
  var Loop = true;


  // Assign Variables
  listedItems = [
    {
      name: "MilkyWay",
      cost: 0.75
    },
    {
      name: "BabeRuth",
      cost: 1.00
    },
    {
      name: "ThreeMusketeers",
      cost: 1.00
    },
    {
      name: "Doritos",
      cost: 2.25
    },
    {
      name: "Cheetos",
      cost: 2.00
    },
    {
      name: "Lays",
      cost: 2.00
    },
    {
      name: "Twistlers",
      cost: 1.25
    },
    {
      name: "Sour Patch Kids",
      cost: 1.50
    },
    {
      name: "Starbursts",
      cost: 1.75
    }
  ]

  while(Loop) {
    userMoney = Number(prompt("Please Enter Money" + "\n" + "Money: $" + userMoney.toFixed(2)));
    if(userMoney < 0) {
      alert("Please Enter Money Greater Than Zero");
      } else if (userMoney > 0) {
        while(Loop){
          itemCode = prompt("Please Enter A Code To Vend An Item or " +`"quit" to exit.` + "\n" + "Money: $" + userMoney.toFixed(2));
          // If Switch case matches, takes name and cost from listedItems.
          // It then calculates the change and displays vendItem and userChange
          switch(itemCode) {
            case "A1":
              if(listedItems[0].cost <= userMoney){
                vendItem = listedItems[0].name;
                userMoney -= listedItems[0].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[0].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[0].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "A2":
              if(listedItems[1].cost <= userMoney){
                vendItem = listedItems[1].name;
                userMoney -= listedItems[1].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[1].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[0].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "A3":
              if(listedItems[2].cost <= userMoney){
                vendItem = listedItems[2].name;
                userMoney -= listedItems[2].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[2].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[0].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "B1":
              if(listedItems[3].cost <= userMoney){
                vendItem = listedItems[3].name;
                userMoney -= listedItems[3].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[3].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[3].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "B2":
              if(listedItems[4].cost <= userMoney){
                vendItem = listedItems[4].name;
                userMoney -= listedItems[4].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[4].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[4].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "B3":
              if(listedItems[5].cost <= userMoney){
                vendItem = listedItems[5].name;
                userMoney -= listedItems[5].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[5].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[5].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "C1":
              if(listedItems[6].cost <= userMoney){
                vendItem = listedItems[6].name;
                userMoney -= listedItems[6].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[6].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[6].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "C2":
              if(listedItems[7].cost <= userMoney){
                vendItem = listedItems[7].name;
                userMoney -= listedItems[7].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[7].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[7].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "C3":
              if(listedItems[8].cost <= userMoney){
                vendItem = listedItems[8].name;
                userMoney -= listedItems[8].cost;
                userChange = userMoney;
                document.write("Vending: " + vendItem + "</br>");
                document.write("Change: $" + userChange.toFixed(2) + "</br>");
                Loop = false;
              } else if(listedItems[8].cost > userMoney) {
                alert("Not Enough Money. Please Enter $" + (listedItems[8].cost - userMoney).toFixed(2));
              } else {
                console.log("error");
                Loop = false;
              }
            break;
            case "quit":
              userChange = userMoney;
              document.write("Change: $" + userChange.toFixed(2) + "</br>");
              Loop = false;
            break;
            default:
              alert("Item Code Does Not Match. Try Again.");
          }
        }
      } else {
        alert("Please Enter A Number");
      }
  }
}

vendingMachine();