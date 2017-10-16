var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var length, canvas, rectHeight, rectWidth, circleRadius, triHeight, shapeName, shapeHeight, shapeRadius, shapeArea, shapePerimeter, shapeWidth;
document.addEventListener('DOMContentLoaded', function () {
    var length = document.getElementById('side-length-input');
    canvas = document.getElementById('canvas');
    rectHeight = document.getElementById("rectangle-height-input"),
        rectWidth = document.getElementById("rectangle-width-input"),
        circleRadius = document.getElementById("radius-input"),
        triHeight = document.getElementById("triangle-height-input");
    shapeName = document.getElementById("shape-name"),
        shapeHeight = document.getElementById("shape-height"),
        shapeWidth = document.getElementById("shape-width"),
        shapeRadius = document.getElementById("shape-radius"),
        shapeArea = document.getElementById("shape-area"),
        shapePerimeter = document.getElementById("shape-perimeter");
});
var Shape = /** @class */ (function () {
    function Shape(type, shapeName, height, width, radius, area, perimeter) {
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.shape.addEventListener("dblclick", this.removeShape.bind(this));
        this.shape.addEventListener("click", this.description.bind(this));
    }
    Shape.prototype.description = function () {
        var shapeNameText = document.createElement('span'), shapeHeightText = document.createElement('span'), shapeWidthText = document.createElement('span'), shapeRadiusText = document.createElement('span'), shapeAreaText = document.createElement('span'), shapePerimeterText = document.createElement('span');
        shapeNameText.innerHTML = " " + this.shape.className;
        shapeHeightText.innerHTML = " " + this.height;
        shapeWidthText.innerHTML = " " + this.width;
        shapeRadiusText.innerHTML = " " + this.radius;
        shapeAreaText.innerHTML = " " + this.area;
        shapePerimeterText.innerHTML = " " + this.perimeter;
        shapeName.appendChild(shapeNameText);
        shapeHeight.appendChild(shapeHeightText);
        shapeWidth.appendChild(shapeWidthText);
        shapeRadius.appendChild(shapeRadiusText);
        shapeArea.appendChild(shapeAreaText);
        shapePerimeter.appendChild(shapePerimeterText);
    };
    Shape.prototype.getRandomPosition = function () {
        var availW = canvas.offsetWidth - 60, availH = canvas.offsetHeight - 60, randomY = Math.round(Math.random() * availH) + 'px', randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY;
    };
    Shape.prototype.draw = function () {
        canvas.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
        this.getRandomPosition();
        this.description();
    };
    Shape.prototype.removeShape = function () {
        this.shape.remove();
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this, 'square') || this;
        _this.height = length.value + 'px';
        _this.width = length.value + 'px';
        _this.shape.style.width = length.value + 'px';
        _this.shape.style.height = length.value + 'px';
        _this.radius = "none";
        _this.area = length.value * 2;
        _this.perimeter = length.value * 4;
        _this.draw();
        return _this;
    }
    return Square;
}(Shape));
var makeSquare = function () {
    new Square();
};
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this, 'rectangle') || this;
        _this.shape.style.height = rectHeight.value + "px";
        _this.shape.style.width = rectWidth.value + "px";
        _this.height = rectHeight.value;
        _this.width = rectWidth.value;
        _this.radius = "none";
        _this.area = rectHeight.value * rectWidth.value;
        _this.perimeter = 2 * (rectHeight.value + rectWidth.value);
        _this.draw();
        return _this;
    }
    return Rectangle;
}(Shape));
var makeRectangle = function () {
    new Rectangle();
};
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this, 'circle') || this;
        _this.shape.style.height = circleRadius.value + "px";
        _this.shape.style.width = circleRadius.value + "px";
        _this.height = "none";
        _this.width = "none";
        _this.radius = Math.round(circleRadius.value / 2);
        _this.area = "none";
        _this.perimeter = "none";
        _this.draw();
        return _this;
    }
    return Circle;
}(Shape));
var makeCircle = function () {
    new Circle();
};
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this, 'triangle') || this;
        _this.shape.style.borderRight = triHeight.value + "px solid transparent",
            _this.shape.style.borderBottom = triHeight.value + "px solid #FFEE00",
            _this.shape.style.borderTop = triHeight.value + "px solid transparent",
            _this.area = 0.5 * 45 * triHeight.value;
        _this.draw();
        return _this;
    }
    return Triangle;
}(Shape));
var makeTriangle = function () {
    new Triangle();
};
