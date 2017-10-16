let length,
    canvas,
    rectHeight,
    rectWidth,
    circleRadius,
    triHeight,
    shapeName,
    shapeHeight,
    shapeRadius,
    shapeArea,
    shapePerimeter,
    shapeWidth;
    

document.addEventListener('DOMContentLoaded', () => {
  let length  = document.getElementById('side-length-input');
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

class Shape {
shape;
height;
width;
radius;
area;
perimeter;
length;
value;
  constructor(type, shapeName, height, width, radius, area, perimeter) {
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.shape.addEventListener("dblclick", this.removeShape.bind(this));       
        this.shape.addEventListener("click", this.description.bind(this));              
  }


    description(){
        let shapeNameText = document.createElement('span'),
        shapeHeightText = document.createElement('span'),
        shapeWidthText = document.createElement('span'),
        shapeRadiusText = document.createElement('span'),
        shapeAreaText = document.createElement('span'),
        shapePerimeterText = document.createElement('span');

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
        
    }  

    getRandomPosition() {
        let availW = canvas.offsetWidth  - 60,
        availH = canvas.offsetHeight  - 60,
        randomY = Math.round(Math.random() * availH) + 'px',
        randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY;
    }

    draw() {
        canvas.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
        this.getRandomPosition();
        this.description();
    }

    removeShape(){
        this.shape.remove();
    }
}

class Square extends Shape {
    constructor() {
        super('square');
        this.height = length.value + 'px';
        this.width = length.value + 'px';
        this.shape.style.width = length.value + 'px';
        this.shape.style.height = length.value + 'px';
        this.radius = "none";
        this.area = length.value * 2;
        this.perimeter = length.value * 4; 
        this.draw();
    }
}
    const makeSquare = () => {
        new Square();
    } 

class Rectangle extends Shape { 
    constructor() {
        super('rectangle');
        this.shape.style.height = rectHeight.value + "px";
        this.shape.style.width = rectWidth.value  + "px";
        this.height = rectHeight.value;
        this.width = rectWidth.value;
        this.radius = "none";
        this.area = rectHeight.value * rectWidth.value;
        this.perimeter = 2 * (rectHeight.value + rectWidth.value);
        this.draw();
    }
}
    const makeRectangle = () => {
        new Rectangle();
    } 
class Circle extends Shape {
    constructor() {
        super('circle');
        this.shape.style.height = circleRadius.value + "px";
        this.shape.style.width = circleRadius.value + "px";
        this.height = "none";
        this.width = "none";
        this.radius = Math.round(circleRadius.value /2);
        this.area = "none";
        this.perimeter = "none";
        this.draw();
    }
}
    const makeCircle = () => {
        new Circle();
    } 

class Triangle extends Shape {
    constructor() {
        super('triangle');
        this.shape.style.borderRight = triHeight.value + "px solid transparent",
        this.shape.style.borderBottom = triHeight.value + "px solid #FFEE00",
        this.shape.style.borderTop = triHeight.value + "px solid transparent",
        this.area = 0.5 * 45 * triHeight.value;  
        this.draw();
    }
}
    const makeTriangle = () => {
        new Triangle();
    } 
    
