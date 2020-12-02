"use strict";

let drinkStorage = new HashStorage();

let nameDrink = document.getElementById("drinkName");

nameDrink.onclick = function () {
    let keyDrink = prompt("Название напитка");
    let valueDrink = {};

    valueDrink.alcohol = confirm(keyDrink + " - алкогольный напиток?");
    valueDrink.ingrediens = prompt("Ингредиенты напитка "+ keyDrink+"(через запятую): ");
    valueDrink.recipe = prompt("Рецепт напитка - " + keyDrink+":");
    drinkStorage.addValue(keyDrink, valueDrink);
}

let info = document.getElementById("drinkInfo");
let drinkInfoPlace = document.getElementById("drinkInfoPlace");

info.onclick = function () {
    let drinkInfo = prompt("Название напитка");
    let answer = drinkStorage.getValue(drinkInfo);

    if (drinkStorage.getValue(drinkInfo) !== undefined) {
        drinkInfoPlace.innerHTML = "Напиток: " + drinkInfo +
            "<br>" + "Алкогольный: " + (answer.alcohol === true ? "да" : "нет") +
            "<br>" + "Ингредиенты: " + (answer.ingrediens ? answer.ingrediens : "ингредиентов нет") +
            "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "рецепта нет");
    } else {
        drinkInfoPlace.innerHTML = "Напиток отсутствует!";
    }
}

let drinkDel = document.getElementById("drinkInfoDel");

drinkDel.onclick = function () {
    let drinkDel = prompt("Название напитка");

    if (drinkStorage.deleteValue(drinkDel) === true) {
        drinkInfoPlace.innerHTML = "Информация о напитке удалена!";
    } else {
        drinkInfoPlace.innerHTML = "Напиток отсутствует";
    }

}

let drinkList = document.getElementById("drinkList");

drinkList.onclick = function () {
    drinkInfoPlace.innerHTML = drinkStorage.getKeys();
}