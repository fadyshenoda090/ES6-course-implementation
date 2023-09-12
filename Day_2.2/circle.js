import {shape} from './shape.js';
export class circle extends shape{
    constructor (dim){
        super(dim);
    }
    calcArea(){
        return 3.14*this.dim*this.dim;
    }
    calcPrimeter(){
        return 2*Math.PI*this.dim;
    }
}