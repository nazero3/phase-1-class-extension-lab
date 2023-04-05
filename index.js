// Your code here
class Polygon{
    constructor(ints){
        this.ints = ints;
    }
    get countSides(){
        return this.ints.length;
    }
    get perimeter(){
        return this.ints.reduce((acc,cur) =>{
            return acc  + cur;
        },0)
    }
}
class Triangle extends Polygon{
    get isValid(){
        return ((this.ints[0] + this.ints[1]) > this.ints[2]) && ((this.ints[2] + this.ints[1]) > this.ints[0]) ? true : false;
    }
}

class Square extends Polygon{
    get isValid(){
        return ((this.ints[0] === this.ints[1]) && (this.ints[2] === this.ints[3]) && (this.ints[0] ===this.ints[2])) ? true : false;
    }
    get area(){
        return this.ints[0]*this.ints[1];
    }
}