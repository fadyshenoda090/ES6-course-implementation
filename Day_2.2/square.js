import {shape} from './shape.js'
export class sqaure extends shape{
    constructor(dim){
        super(dim)
    }
    calcArea(){
        return this.dim*this.dim
    }
    calcPrimeter(){
        return 4*this.dim;
    }
}