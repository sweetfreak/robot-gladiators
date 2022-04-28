var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function:
var fight = function() {
    //alert players that they're starting the round.
    window.alert("Welcome to Robooooot Glaaaadiatooorrs!");

    //subtract value of playerAttach from value of enemyHealth, then use that value to update the enemy health
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
     //check enemy's health
     if (enemyHealth <= 0) {
        window.alert(enemyName + " is... ahem... deceased...");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    //subtract enemyAttack from playerHea`lth and assign new value to playerHealth
    playerHealth = playerHealth - enemyAttack;
    //log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

     //check enemy's health
     if (playerHealth <= 0) {
        window.alert(playerName + " is... ahem... deceased...");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
   
};

//execute function:
fight();