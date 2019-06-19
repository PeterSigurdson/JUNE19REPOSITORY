// factory function
function createCircle(radius){
 return {
    radius,
    draw: function(){
        console.log('draw');
    }
};   
}
const circle = createCircle(1);
circle.draw();

// Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const another = new Circle(1);

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log("draw");
}
`);

const another = new Circle(1);
