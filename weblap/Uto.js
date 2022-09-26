const speed = 0.02

export default class Uto {
    constructor(utok){
        this.utok = utok
        this.reset()
    }

    get position(){
        return parseFloat(getComputedStyle(this.utok).getPropertyValue("--position"))
    }

    set position(value){
        this.utok.style.setProperty("--position", value)
    }

    reset(){
        this.position = 50
    }

    update(delta, labdaHeight){
        this.position += speed * delta * (labdaHeight - this.position)
    }
}