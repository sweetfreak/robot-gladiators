var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function:
var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    if (promptFight === "fight" || promptFight === "FIGHT"){
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
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight! Coward!");
            //subtract money
            playerMoney = playerMoney - 2;
        } 
        //if no (false) ask question again, by running "fight()" again
        else {
            fight();
        }
   
    } else {
        window.alert("You need to choose a valid option. Try again.");
    }
}

//execute function:
for (var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
