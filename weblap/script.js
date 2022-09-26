import Labda from './Labda.js'
import Uto from "./Uto.js"

const labda = new Labda(document.getElementById("labda"))
const jatekosUto = new Uto(document.getElementById("jatekos-uto"))
const szamitogepUto = new Uto(document.getElementById("szamitogep-uto"))
const jatekosPontszam = document.getElementById("jatekos-pontszama")
const szamitogepPontszam = document.getElementById("szamitogep-pontszama")

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        labda.update(delta)
        szamitogepUto.update(delta, labda.y)

    if (isLose()) handleLose()
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

function isLose() {
    const rect = labda.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose(){
    const rect = labda.rect()
    if (rect.right >= window.innerWidth){
        jatekosPontszam.textContent = parseInt(jatekosPontszam.textContent) + 1
    } else {
        szamitogepPontszam.textContent = parseInt(szamitogepPontszam.textContent) + 1
    }
    labda.reset()
    szamitogepUto.reset()
}

document.addEventListener("mousemove", e => {
    jatekosUto.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)