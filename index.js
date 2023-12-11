// Add your Circle class here

class Circle{

    #radius

    constructor(radius){
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
    }

    get diameter(){
        return(this.#radius * 2);
    }

    set diameter(diameter){
        this.#radius = diameter / 2;
    }

    get circumference(){
        return(Math.PI * this.#radius * 2)
    }

    set circumference(circumference){
        this.#radius = circumference / 2 / Math.PI
    }

    get area(){
        return(Math.PI * this.#radius ** 2)
    }

    set area(area) {
        this.#radius = Math.sqrt(area / Math.PI)
    }
}