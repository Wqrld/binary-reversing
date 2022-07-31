function unsignedHexToSignedHex(hex) {
    var int = parseInt(hex, 16);
    if (int > 0x7FFFFFFF) {
        int = int - 0x100000000;
    }
    return int.toString(16);
}

console.log(unsignedHexToSignedHex("fffffe85"));

function signedHexToUnsignedHex(hex) {
    var int = parseInt(hex, 16);
    if (int < 0) {
        int = int + 0x100000000;
    }
    return int.toString(16);
}


function reverseHex(hex) {
    var result = "";
    for (var i = 0; i < hex.length; i += 2) {
        result = hex.substr(i, 2) + result;
    }
    return result;
}

console.log(reverseHex("fffffe85"));

function signedHexAddition(hex1, hex2) {
    var int1 = parseInt(hex1, 16);
    var int2 = parseInt(hex2, 16);
    var result = int1 + int2;
    if (result > 0x7FFFFFFF) {
        result = result - 0x100000000;
    }
    return result.toString(16);
}

function signedHexSubtraction(hex1, hex2) {
    var int1 = parseInt(hex1, 16);
    var int2 = parseInt(hex2, 16);
    var result = int1 - int2;
    if (result < -0x80000000) {
        result = result + 0x100000000;
    }
    return result.toString(16);
}

console.log(signedHexAddition("fffffe85", "00000001"));
