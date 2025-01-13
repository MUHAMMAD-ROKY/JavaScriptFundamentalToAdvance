/**
 * 
 * @returns nothing
 */
function areaOfNoting(){
    return "area of Nothing";
}

/**
 * calculating area of rectangle
 * @param {number} dim1 the length of the rectangle
 * @param {number} dim2 the width of the rectangle
 * @returns area of rectangle
 */
function areaOfRectangle(dim1,dim2) {
    return dim1*dim2;
}
areaOfRectangle(10,12);
function areaOfTriangle(dim1,dim2) {
    return dim1*dim2*0.5;
}

function areaOfCircle(dim1) {
    return Math.PI*dim1*dim1;
}
console.log(areaOfNoting());