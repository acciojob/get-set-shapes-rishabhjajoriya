//complete this code
class Rectangle{
    constructor(a,b){
        this._width = a
        this._heigth = b
    }
    get height(){
        return this._heigth
    }
    get width(){
        return this._width
    }
    getArea(){
        console.log(this.heigth*this.width)
    }
}

class Square extends Rectangle{
    constructor(s){
        super(s,s)
    }
    getP(){
        console.log(this.width*4)
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
