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

console.log("================");
//  896:   e8 85 fe ff ff          callq  720 <execvp@plt>
//  89b:   90                      nop

/*
0000000000000720 <execvp@plt>:
 720:   ff 25 92 18 20 00       jmpq   *0x201892(%rip)        # 201fb8 <execvp@GLIBC_2.2.5>
 726:   68 04 00 00 00          pushq  $0x4
 72b:   e9 a0 ff ff ff          jmpq   6d0 <.plt>

0000000000000740 <exit@plt>:
 740:   ff 25 82 18 20 00       jmpq   *0x201882(%rip)        # 201fc8 <exit@GLIBC_2.2.5>
 746:   68 06 00 00 00          pushq  $0x6
 74b:   e9 80 ff ff ff          jmpq   6d0 <.plt>
*/

let reversedOffset = reverseHex('85feffff')
let signedOffsetHex = unsignedHexToSignedHex(reversedOffset)
console.log(signedOffsetHex) // = -17b

let computerAddress = signedHexAddition('89b', signedOffsetHex)
console.log(computerAddress) // = 720

console.log('===============')
// Calculate required offset to jump from 0x89b to 0x740
let offset = signedHexSubtraction('740', '89b')
console.log(offset) // -15b

let normalOffset = reverseHex(signedHexToUnsignedHex(offset))
console.log(normalOffset)
