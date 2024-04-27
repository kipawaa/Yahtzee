import { update_upper, update_lower } from "./modules/yahtzee.js"

// add eventlisteners for upper section
document.getElementById("ones1").addEventListener("click", update_upper);
document.getElementById("ones2").addEventListener("click", update_upper);
document.getElementById("ones3").addEventListener("click", update_upper);
document.getElementById("ones4").addEventListener("click", update_upper);
document.getElementById("ones5").addEventListener("click", update_upper);

document.getElementById("twos1").addEventListener("click", update_upper);
document.getElementById("twos2").addEventListener("click", update_upper);
document.getElementById("twos3").addEventListener("click", update_upper);
document.getElementById("twos4").addEventListener("click", update_upper);
document.getElementById("twos5").addEventListener("click", update_upper);

document.getElementById("threes1").addEventListener("click", update_upper);
document.getElementById("threes2").addEventListener("click", update_upper);
document.getElementById("threes3").addEventListener("click", update_upper);
document.getElementById("threes4").addEventListener("click", update_upper);
document.getElementById("threes5").addEventListener("click", update_upper);

document.getElementById("fours1").addEventListener("click", update_upper);
document.getElementById("fours2").addEventListener("click", update_upper);
document.getElementById("fours3").addEventListener("click", update_upper);
document.getElementById("fours4").addEventListener("click", update_upper);
document.getElementById("fours5").addEventListener("click", update_upper);

document.getElementById("fives1").addEventListener("click", update_upper);
document.getElementById("fives2").addEventListener("click", update_upper);
document.getElementById("fives3").addEventListener("click", update_upper);
document.getElementById("fives4").addEventListener("click", update_upper);
document.getElementById("fives5").addEventListener("click", update_upper);

document.getElementById("sixes1").addEventListener("click", update_upper);
document.getElementById("sixes2").addEventListener("click", update_upper);
document.getElementById("sixes3").addEventListener("click", update_upper);
document.getElementById("sixes4").addEventListener("click", update_upper);
document.getElementById("sixes5").addEventListener("click", update_upper);

// add eventlisteners for lower section
document.getElementById("toak").addEventListener("click", update_lower);
document.getElementById("toak").addEventListener("keyup", update_lower);
document.getElementById("foak").addEventListener("click", update_lower);
document.getElementById("foak").addEventListener("keyup", update_lower);
document.getElementById("full_house").addEventListener("click", update_lower);
document.getElementById("small_straight").addEventListener("click", update_lower);
document.getElementById("large_straight").addEventListener("click", update_lower);
document.getElementById("yahtzee").addEventListener("click", update_lower);
document.getElementById("chance").addEventListener("click", update_lower);
document.getElementById("chance").addEventListener("keyup", update_lower);
document.getElementById("bonus_yahtzee1").addEventListener("click", update_lower);
document.getElementById("bonus_yahtzee2").addEventListener("click", update_lower);
document.getElementById("bonus_yahtzee3").addEventListener("click", update_lower);
document.getElementById("bonus_yahtzee4").addEventListener("click", update_lower);
document.getElementById("bonus_yahtzee5").addEventListener("click", update_lower);
