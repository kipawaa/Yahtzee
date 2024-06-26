import { get_ones, get_twos, get_threes, get_fours, get_fives, get_sixes } from "./get_nums.js"
import { is_scratched, scratch } from "./scratch.js"

export function update_upper() {
    // get the subtotal for the upper section
    let subtotal = 0;
    
    // keep track of expected scores for bonus
    let expected = 0;
    
    // get values from input fields and update subtotal and expected
    // if scratched:
    //      ones = 0
    //      expected += 3
    // if not scratched:
    //      ones = get_ones()
    //      expected += 3
    // if get_ones() == 0:
    //      no update to ones
    //      no update to expected

    let ones = get_ones();
    let twos = get_twos();
    let threes = get_threes();
    let fours = get_fours();
    let fives = get_fives();
    let sixes = get_sixes();

    if (is_scratched["ones"]) expected += 3;
    else if (ones) {
        subtotal += ones;
        expected += 3;
    }

    if (is_scratched["twos"]) expected += 6;
    else if (twos) {
        subtotal += twos;
        expected += 6;
    }

    if (is_scratched["threes"]) expected += 9;
    else if (threes) {
        subtotal += threes;
        expected += 9;
    }

    if (is_scratched["fours"]) expected += 12;
    else if (fours) {
        subtotal += fours;
        expected += 12;
    }

    if (is_scratched["fives"]) expected += 15;
    else if (fives) {
        subtotal += fives;
        expected += 15;
    }

    if (is_scratched["sixes"]) expected += 18;
    else if (sixes) {
        subtotal += sixes;
        expected += 18;
    }

    // update the subtotal field
    document.getElementById("upper_subtotal").textContent = subtotal;

    // determine if we get bonus
    let bonus = 0;
    
    if (subtotal < expected) {
        document.getElementById("upper_bonus").textContent = expected - subtotal + " Below Expectation";
    } else if (subtotal === expected) {
        document.getElementById("upper_bonus").textContent = "On Track!";
    } else{
        document.getElementById("upper_bonus").textContent = subtotal - expected + " Above Expectation";
    }

    // if the total is 63 or higher then add the bonus
    if (subtotal >= 63) {
        document.getElementById("upper_bonus").textContent = "35";
        bonus = 35
    }

    // update the upper total
    document.getElementById("upper_total").textContent = subtotal + bonus;

    // update overall total
    update_total();

}

export function update_lower() {
    // keep track of total
    let total = 0;

    // get elements from document
    let toak_element = document.getElementById("toak_score");
    let foak_element = document.getElementById("foak_score");
    let chance_element = document.getElementById("chance_score");
    
    // get values from input fields
    let full_house = document.getElementById("full_house_score").checked;
    let small_straight = document.getElementById("small_straight_score").checked;
    let large_straight = document.getElementById("large_straight_score").checked;
    let yahtzee = document.getElementById("yahtzee_score").checked;
    let bonus_yahtzee1 = document.getElementById("bonus_yahtzee1").checked;
    let bonus_yahtzee2 = document.getElementById("bonus_yahtzee2").checked;
    let bonus_yahtzee3 = document.getElementById("bonus_yahtzee3").checked;
    let bonus_yahtzee4 = document.getElementById("bonus_yahtzee4").checked;
    let bonus_yahtzee5 = document.getElementById("bonus_yahtzee5").checked;
    let bonus_yahtzee6 = document.getElementById("bonus_yahtzee6").checked;

    // get values from input field
    let toak = parseInt(toak_element.value);
    let foak = parseInt(foak_element.value);
    let chance = parseInt(chance_element.value);

    // validity checking
    if (!toak_element.validity.valid) {
        console.log("invalid toak");
        return;
    }
    if (!foak_element.validity.valid) {
        console.log("invalid foak");
        return;
    }
    if (!chance_element.validity.valid) {
        console.log("invalid chance");
        return;
    }


    // update total based on input fields
    total += (toak && !is_scratched["toak"]) ? toak: 0;
    total += (foak && !is_scratched["foak"]) ? foak: 0;
    total += (full_house && !is_scratched["full_house"]) ? 25: 0;
    total += (small_straight && !is_scratched["small_straight"]) ? 30: 0;
    total += (large_straight && !is_scratched["large_straight"]) ? 40: 0;
    total += (yahtzee && !is_scratched["yahtzee"]) ? 50: 0;
    total += (chance && !is_scratched["chance"]) ? chance: 0;
    total += bonus_yahtzee1 ? 100: 0;
    total += bonus_yahtzee2 ? 100: 0;
    total += bonus_yahtzee3 ? 100: 0;
    total += bonus_yahtzee4 ? 100: 0;
    total += bonus_yahtzee5 ? 100: 0;
    total += bonus_yahtzee6 ? 100: 0;

    // update lower total
    document.getElementById("lower_total").textContent = total;

    // update overall score
    update_total();
}


function update_total() {
    let upper = parseInt(document.getElementById("upper_total").textContent);
    let lower = parseInt(document.getElementById("lower_total").textContent);

    lower = lower ? lower: 0;
    upper = upper ? upper: 0;
    
    document.getElementById("total").textContent = lower + upper;
}
