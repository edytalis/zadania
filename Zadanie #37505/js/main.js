let dataA = "Uwielbiam JavaScript";
let dataB = "Jestem świetnym programistą";

function getBiggerString(string1, string2) {
    if (string1.length > string2.length) {
        return string1;
    } else if (string2.length > string1.length) {
        return string2;
    }
}

console.log(getBiggerString(dataA, dataB))