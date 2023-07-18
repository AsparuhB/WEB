const ATTACK_VALUE  = 10;

let chosenMaxValue = 100;
let currentMonsterHealth = chosenMaxValue;
let currentPlayerHealth = chosenMaxValue;

adjustHealthBars(chosenMaxValue);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    if (currentMonsterHealth <= 0 ) {
        alert("You won!");
    }
}

attackBtn.addEventListener("click", attackHandler);