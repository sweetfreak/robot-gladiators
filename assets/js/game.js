var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function:
var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0){
        //ask player if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight! Coward!");
            //subtract money for skipping
            playerMoney = playerMoney - 10;
            console.log ("playermoney", playerMoney);
            break;
        } 
    }
        //subtract value of playerAttach from value of enemyHealth, then use that value to update the enemy health
        enemyHealth = enemyHealth - playerAttack;
        // log a resulting message to the console so we know it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is... ahem... deceased...");
            break;
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 

}
    //alert players that they're starting the round.
        // window.alert("Welcome to Robooooot Glaaaadiatooorrs!");
//execute function:
for (var i=0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    //call fight function with enemy-robot
    fight(enemyNames[i]);
}
