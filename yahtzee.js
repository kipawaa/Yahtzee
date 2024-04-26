function update_upper() {
    // get the subtotal for the upper section
    var subtotal = 0;
    
    // keep track of expected scores for bonus
    var expected = 0;
    
    // get elements
    ones_element = document.getElementById("ones");
    twos_element = document.getElementById("twos");
    threes_element = document.getElementById("threes");
    fours_element = document.getElementById("fours");
    fives_element = document.getElementById("fives");
    sixes_element = document.getElementById("sixes");
    
    // get values for input fields
    ones = ones_element.value;
    twos = twos_element.value;
    threes = threes_element.value;
    fours = fours_element.value;
    fives = fives_element.value;
    sixes = sixes_element.value;

    // validity checking
    if (!ones_element.validity.valid) {
        console.log("invalid ones");
        return;
    }
    if (!twos_element.validity.valid) {
        console.log("invalid twos");
        return;
    }
    if (!threes_element.validity.valid) {
        console.log("invalid threes");
        return;
    }
    if (!fours_element.validity.valid) {
        console.log("invalid fours");
        return;
    }
    if (!fives_element.validity.valid) {
        console.log("invalid fives");
        return;
    }
    if (!sixes_element.validity.valid) {
        console.log("invalid sixes");
        return;
    }

    // add values from input fields to subtotal
    subtotal += ones === "" ? 0: parseInt(ones);
    subtotal += twos === "" ? 0: parseInt(twos);
    subtotal += threes === "" ? 0: parseInt(threes);
    subtotal += fours === "" ? 0: parseInt(fours);
    subtotal += fives === "" ? 0: parseInt(fives);
    subtotal += sixes === "" ? 0: parseInt(sixes);
    console.log("subtotal: " + subtotal);

    // add values for expected
    expected += ones === "" ? 0: 3;
    expected += twos === "" ? 0: 6;
    expected += threes === "" ? 0: 9;
    expected += fours === "" ? 0: 12;
    expected += fives === "" ? 0: 15;
    expected += sixes === "" ? 0: 18;
    console.log("expected: " + expected);

    // update the subtotal
    document.getElementById("upper_subtotal").textContent = subtotal;

    // determine if we get bonus
    var bonus = 0;
    
    // if the total is less than 63 then no bonus
    if (subtotal < expected) {
        // update the bonus text for the number of missing points
        document.getElementById("upper_bonus").textContent = expected - subtotal + " Below Expectation";
    } else {
        document.getElementById("upper_bonus").textContent = "On Track!";
    }

    // if the total is 63 or higher then add the bonus
    if (subtotal >= 63) {
        document.getElementById("upper_bonus").textContent = "Bonus Attained!";
        document.getElementById("upper_bonus").textContent = "35";
        bonus = 35
    }

    // update the upper total
    document.getElementById("upper_total").textContent = subtotal + bonus;

    // update overall total
    update_total();

}

function update_lower() {
    // keep track of total
    var total = 0;

    // get elements from document
    toak_element = document.getElementById("toak");
    foak_element = document.getElementById("foak");
    chance_element = document.getElementById("chance");
    
    // get values from input fields
    full_house = document.getElementById("full_house").checked;
    small_straight = document.getElementById("small_straight").checked;
    large_straight = document.getElementById("large_straight").checked;
    yahtzee = document.getElementById("yahtzee").checked;
    bonus_yahtzee1 = document.getElementById("bonus_yahtzee1").checked;
    bonus_yahtzee2 = document.getElementById("bonus_yahtzee2").checked;
    bonus_yahtzee3 = document.getElementById("bonus_yahtzee3").checked;
    bonus_yahtzee4 = document.getElementById("bonus_yahtzee4").checked;
    bonus_yahtzee5 = document.getElementById("bonus_yahtzee5").checked;
    bonus_yahtzee6 = document.getElementById("bonus_yahtzee6").checked;

    // get values from input field
    toak = parseInt(toak_element.value);
    foak = parseInt(foak_element.value);
    chance = parseInt(chance_element.value);

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
    total += toak ? toak: 0;
    total += foak ? foak: 0;
    total += full_house ? 25: 0;
    total += small_straight ? 30: 0;
    total += large_straight ? 40: 0;
    total += yahtzee ? 50: 0;
    total += chance ? chance: 0;
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
    upper = parseInt(document.getElementById("upper_total").textContent);
    lower = parseInt(document.getElementById("lower_total").textContent);

    lower = lower ? lower: 0;
    upper = upper ? upper: 0;
    
    console.log("updating total to: " + (lower + upper));

    document.getElementById("total").textContent = lower + upper;
}
