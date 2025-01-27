import * as swcHelpers from "@swc/helpers";
var C = function C() {
    "use strict";
    swcHelpers.classCallCheck(this, C);
};
var str;
var bool;
var num;
var strOrNum;
var strOrBool;
var numOrBool;
var strOrNumOrBool;
var strOrC;
var numOrC;
var boolOrC;
var emptyObj;
var c;
// A type guard of the form typeof x === s, 
// where s is a string literal with any value but 'string', 'number' or 'boolean',
//  - when true, removes the primitive types string, number, and boolean from the type of x, or
//  - when false, has no effect on the type of x.
if ((typeof strOrC === "undefined" ? "undefined" : swcHelpers.typeOf(strOrC)) === "Object") {
    c = strOrC; // C
} else {
    var r2 = strOrC; // string
}
if ((typeof numOrC === "undefined" ? "undefined" : swcHelpers.typeOf(numOrC)) === "Object") {
    c = numOrC; // C
} else {
    var r3 = numOrC; // number
}
if ((typeof boolOrC === "undefined" ? "undefined" : swcHelpers.typeOf(boolOrC)) === "Object") {
    c = boolOrC; // C
} else {
    var r4 = boolOrC; // boolean
}
if ((typeof strOrC === "undefined" ? "undefined" : swcHelpers.typeOf(strOrC)) === "Object") {
    c = strOrC; // error: but no narrowing to C
} else {
    var r5 = strOrC; // error: no narrowing to string
}
if ((typeof strOrNumOrBool === "undefined" ? "undefined" : swcHelpers.typeOf(strOrNumOrBool)) === "Object") {
    var q1 = strOrNumOrBool; // {}
} else {
    var q2 = strOrNumOrBool; // string | number | boolean
}
// A type guard of the form typeof x !== s, where s is a string literal,
//  - when true, narrows the type of x by typeof x === s when false, or
//  - when false, narrows the type of x by typeof x === s when true.
if ((typeof strOrC === "undefined" ? "undefined" : swcHelpers.typeOf(strOrC)) !== "Object") {
    var r2 = strOrC; // string
} else {
    c = strOrC; // C
}
if ((typeof numOrC === "undefined" ? "undefined" : swcHelpers.typeOf(numOrC)) !== "Object") {
    var r3 = numOrC; // number
} else {
    c = numOrC; // C
}
if ((typeof boolOrC === "undefined" ? "undefined" : swcHelpers.typeOf(boolOrC)) !== "Object") {
    var r4 = boolOrC; // boolean
} else {
    c = boolOrC; // C
}
if ((typeof strOrNumOrBool === "undefined" ? "undefined" : swcHelpers.typeOf(strOrNumOrBool)) !== "Object") {
    var q11 = strOrNumOrBool; // string | number | boolean
} else {
    var q21 = strOrNumOrBool; // {}
}
