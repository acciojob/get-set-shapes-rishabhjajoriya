//complete this code
class Rectangle{
    constructor(a,b){
        this._width = a
        this._height = b
    }
    get height(){
        return this._height
    }
    get width(){
        return this._width
    }
    getArea(){
        console.log(this.height*this.width)
    }
}

class Square extends Rectangle{
    constructor(s){
        super(s,s)
    }
    getPerimeter(){
        console.log(this.width*4)
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
