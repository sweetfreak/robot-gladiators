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
            playerMoney = Math.max(0, playerMoney - 10);
            console.log ("playermoney", playerMoney);
            break;
        }   
    }

        //calculate damge done by player 
        var damage = randomNumber(playerAttack-3, playerAttack);
        //subtract value of playerAttach from value of enemyHealth, then use that value to update the enemy health
        enemyHealth = Math.max(0, enemyHealth - damage);
        // log a resulting message to the console so we know it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is... ahem... deceased...");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        var damage = randomNumber(enemyAttack-3, enemyAttack);
        //subtract enemyAttack from playerHea`lth and assign new value to playerHealth
        playerHealth = Math.max(0, playerHealth - damage);
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
var endGame = function() {
    var playAgainConfirm =  window.confirm("Wanna go another round?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thanks for player Robot Gladiator. Come back soon ya hear?")
    }
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, ya made it out alive. And your payout - err - your score is " + playerMoney + "!");
    }
    window.alert("You've lose your robot in battle. Pour one out for em.");
}

var shop = function() {
    //ask player what they want to do
    var shopOptionPrompt = window.prompt ( "Choose one: REFILL your health, UPGRADE your attack, or LEAVE the shop. Enter REFILL, UPGRADE, or LEAVE to proceed.")

    //use a SWITCH to carry out an action:
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            window.alert("Refilling player's health by 20 for 7 dollars.");
            if (playerMoney >= 7) {
                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
            } else {
                window.alert("You don't have enough money, chump");
            }
            break;
        
        case "upgrade":
        case "UPGRADE":    
            if (playerMoney >= 7 ) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack, decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money, ya dingus!");
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("You and " + playerName + " left the store.")
            //do notheirng, so the function ends
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again, dummy!");
            //call shop again
            shop();
            break;
        }

}

var startGame = function () {    
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i=0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
            //alert players that they're starting the round.
            window.alert("Welcome to Robooooot Glaaaadiatooorrs! Round " + (i + 1) + "... BEGIN!");
    
            var pickedEnemyName = enemyNames[i];
            //reset enemy health - gives a minimum health of 40 and a max of 60.
            enemyHealth = randomNumber(40, 60);

            //debugger;

            //if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1){
                //as if player wants to use shop before next round
                var storeConfirm = window.confirm("The fight's over, ya wanna visit the stop before the next round?");
                //if yes, take to shop function
                if (storeConfirm){
                    shop();
                }
                
            }

            //call fight function with enemy-robot
            fight(pickedEnemyName); 
        }
        else {
            window.alert("You have lost your robot in battle! Game Over man!");
            break;
        }
    }
    //play again
    startGame();
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}
   
startGame();


