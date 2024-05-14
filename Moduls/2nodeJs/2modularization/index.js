const Tiger = require('./tiger')
const Wolf = require ('./wolf')

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        return tiger.growl()
    }
    if (wolf.strength > tiger.strength) {
        return wolf.howl()
    }
    console.log ('Tiger and Wolf have same strength')
}

const tiger = new Tiger
const wolf = new Wolf
fighting(tiger, wolf)