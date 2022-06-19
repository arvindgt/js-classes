var Friuts = /** @class */ (function () {
    function Friuts(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        console.log("I am eating ".concat(id, " ").concat(name, " in Constructor which is a").concat(type, " food"));
    }
    return Friuts;
}());
var firstFruite = new Friuts(1, 'Banana', 'healthy');
