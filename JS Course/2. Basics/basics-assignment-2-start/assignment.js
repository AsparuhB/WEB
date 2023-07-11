const task3Element = document.getElementById('task-3');

function simple() {
    alert("Hello there!")
    return;
}

function inputNeeded(name) {
    alert(name);
}

inputNeeded("Alex")

task3Element.addEventListener("click", simple);

function threeStrings(str1, str2, str3) {
    let stringimusPrime = str1 + str2 + str3;
    return stringimusPrime;
}

threeStrings("az", " sum", " tuka");
alert(threeStrings("az", " sum", " tuka"));

