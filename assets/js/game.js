//create function:
var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0){
        //ask player if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes, (true), leave fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has chosen to skip the fight! Coward!");
            //subtract money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log ("playermoney", playerInfo.money);
            break;
        }   
    }

        //calculate damge done by player 
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
        //subtract value of playerAttach from value of enemyHealth, then use that value to update the enemy health
        enemy.health = Math.max(0, enemy.health - damage);
        // log a resulting message to the console so we know it worked
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " is... ahem... deceased...");
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        var damage = randomNumber(enemy.attack-3, enemy.attack);
        //subtract enemyAttack from playerHea`lth and assign new value to playerHealth
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        //log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        //check enemy's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " is... ahem... deceased...");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
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
    if (playerInfo.health > 0) {
        window.alert("Great job, ya made it out alive. And your payout - err - your score is " + playerInfo.money + "!");
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
            playerInfo.refillHealth();
            break;
        
        case "upgrade":
        case "UPGRADE":    
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("You and " + playerInfo.name + " left the store.")
            //do nothing, so the function ends
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
    playerInfo.reset();

    for (var i=0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0) {
            //alert players that they're starting the round.
            window.alert("Welcome to Robooooot Glaaaadiatooorrs! Round " + (i + 1) + "... BEGIN!");
            debugger;
            var pickedEnemyObj = enemyInfo[i];
            //reset enemy health - gives a minimum health of 40 and a max of 60.
            pickedEnemyObj.health = randomNumber(40, 60);

            //debugger;

            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                //as if player wants to use shop before next round
                var storeConfirm = window.confirm("The fight's over, ya wanna visit the stop before the next round?");
                //if yes, take to shop function
                if (storeConfirm){
                    shop();
                }
                
            }

            //call fight function with enemy-robot
            fight(pickedEnemyObj); 
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
   
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling the player's health by 20 for 7 dollas")
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("Ya gotta have ALL the money to pay.")
        }
        
    },
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollas")
            this.attack += 6;
            this.attack -= 7;   
        } else {
            window.alert("Ya gotta have ALL the money to pay.")
        }
        
    }
};
    
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber (10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber (10, 14)
        }
    ]

startGame();