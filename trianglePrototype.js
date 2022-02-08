function Triang(p1, p2, p3) {
    this.point1 = p1;
    this.point2 = p2;
    this.point3 = p3;
}

Triang.prototype.perimeter = function(){
    return this.point1.distanceFrom(this.point2)
         + this.point2.distanceFrom(this.point3)
         + this.point3.distanceFrom(this.point1)
}

Triang.prototype.area = function(){
    const halfP = this.perimeter() / 2;
    const halfPMinusFirstSide = halfP - this.point1.distanceFrom(this.point2);
    const halfPMinusSecondSide = halfP - this.point2.distanceFrom(this.point3);
    const halfPMinusThirdSide = halfP - this.point3.distanceFrom(this.point1);
    return Math.sqrt(halfP * halfPMinusFirstSide * halfPMinusSecondSide * halfPMinusThirdSide);
}




function RightTriang(p1, p2, p3) {
    Triang.call(this, p1, p2, p3);
    Object.setPrototypeOf(RightTriang.prototype, Triang.prototype)
}

RightTriang.prototype.calculateHp = function(){
    const c1 = this.point1.distanceFrom(this.point2);
    const c2 = this.point2.distanceFrom(this.point3);

    const hp = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2,2));
    
    return hp
}


function ScalTriang(params) {
    Triang.call(this, p1, p2, p3);
    Object.setPrototypeOf(ScalTriang.prototype, Triang.prototype)
}

