var userMoney = 0;
var totalCost = 1.0;
function updateMoney(money) {
    userMoney += parseInt(money);
    document.getElementById('userMoney').innerHTML = userMoney;
}
function updateTotal() {
    var bacon = document.getElementById('bacon').checked;
    var cheese = document.getElementById('cheese').checked;
    var cucumbers = document.getElementById('cucumbers').checked;
    var lettuce = document.getElementById('lettuce').checked;
    var meat = document.getElementById('meat').checked;
    var mushrooms = document.getElementById('mushrooms').checked;
    var onions = document.getElementById('onions').checked;
    var tomatoes = document.getElementById('tomatoes').checked;
    var baconImage = document.getElementById("baconImage");
    var cheeseImage = document.getElementById("cheeseImage");
    var cucumbersImage = document.getElementById("cucumbersImage");
    var lettuceImage = document.getElementById("lettuceImage");
    var meatImage = document.getElementById("meatImage");
    var mushroomsImage = document.getElementById("mushroomsImage");
    var onionsImage = document.getElementById("onionsImage");
    var tomatoesImage = document.getElementById("tomatoesImage");
    var baconCost = 0.5;
    var cheeseCost = 1.0;
    var cucumbersCost = 0.75;
    var lettuceCost = 0.5;
    var meatCost = 2.0;
    var mushroomsCost = 0.5;
    var onionsCost = 0.25;
    var tomatoesCost = 0.5;
    bacon = document.getElementById('bacon').checked;
    cheese = document.getElementById('cheese').checked;
    cucumbers = document.getElementById('cucumbers').checked;
    lettuce = document.getElementById('lettuce').checked;
    meat = document.getElementById('meat').checked;
    mushrooms = document.getElementById('mushrooms').checked;
    onions = document.getElementById('onions').checked;
    tomatoes = document.getElementById('tomatoes').checked;
    totalCost = 1.0;
    if (bacon) {
        baconImage.style.display = 'block';
        totalCost = totalCost + baconCost;
    }
    if (cheese) {
        cheeseImage.style.display = 'block';
        totalCost = totalCost + cheeseCost;
    }
    if (cucumbers) {
        cucumbersImage.style.display = 'block';
        totalCost = totalCost + cucumbersCost;
    }
    if (lettuce) {
        lettuceImage.style.display = 'block';
        totalCost = totalCost + lettuceCost;
    }
    if (meat) {
        meatImage.style.display = 'block';
        totalCost = totalCost + meatCost;
    }
    if (mushrooms) {
        mushroomsImage.style.display = 'block';
        totalCost = totalCost + mushroomsCost;
    }
    if (onions) {
        onionsImage.style.display = 'block';
        totalCost = totalCost + onionsCost;
    }
    if (tomatoes) {
        tomatoesImage.style.display = 'block';
        totalCost = totalCost + tomatoesCost;
    }
    document.getElementById("totalCost").innerHTML = "$" + totalCost;
}
function buy() {
    if (userMoney >= totalCost) {
        userMoney = userMoney - totalCost;
        document.getElementById('userMoney').innerHTML = userMoney;
        alert('You have successfully purchased your perfect Burger!\nYour new balance is now updated');
    }
    else {
        alert("You don't have enough funds");
    }
}
