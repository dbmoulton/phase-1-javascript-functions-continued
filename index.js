function saturdayFun(a = "roller-skate") {
    return(`This Saturday, I want to ${a}!`);
}
const mondayWork = function (b = "go to the office") {
    return(`This Monday, I will ${b}.`);
  }
function wrapAdjective(b = "*") {
    return function(a = "special"){
    return(`You are ${b}${a}${b}!`)
    }
    

}