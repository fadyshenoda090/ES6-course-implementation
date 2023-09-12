import { sqaure } from "./square.js";
import { reacangle } from "./recangle.js";
import { circle } from "./circle.js"
import { shape } from "./shape.js";
let sh=new shape(5)
let sq=new sqaure(5,5);
let re=new reacangle(5,5);
let c=new circle(5);
console.log(sh.calcArea());
console.log(sq.calcArea());
console.log(sq.calcPrimeter());
console.log(re.calcArea());
console.log(re.calcPrimeter());
console.log(c.calcArea());
console.log(c.calcPrimeter());