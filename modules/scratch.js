import { update_upper, update_lower } from "./scoring.js"

export let is_scratched = {
    ones: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    toak: false,
    foak: false,
    full_house: false,
    small_straight: false,
    large_straight: false,
    yahtzee: false,
    chance: false
};

export function scratch(event) {
    // get the element that is being scratched/unscratched
    let element = event.target;

    // toggle strike-through on the element
    element.classList.toggle("strike");

    // update is_scratched for this element
    is_scratched[element.id] = !is_scratched[element.id];

    // update the score card
    update_upper();
    update_lower();
}
