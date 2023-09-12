import {shape} from './shape.js'
export class reacangle extends shape {
    constructor(dim,h){
        super(dim)
        this.width = h;
    }
    calcArea(){
        return this.width*this.dim;
    }
    calcPrimeter(){
        return 2*(this.width+this.dim)
    }
}
