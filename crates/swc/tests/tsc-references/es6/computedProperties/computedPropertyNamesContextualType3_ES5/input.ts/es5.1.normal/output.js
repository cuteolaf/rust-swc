function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _obj;
var o = (_obj = {
}, _defineProperty(_obj, +"foo", function(y) {
    return y.length;
}), _defineProperty(_obj, +"bar", function(y) {
    return y.length;
}), _obj);