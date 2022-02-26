const Ramim = {
    id: 101,
    blance: 5000,
    name: 'md.ramim',
    treatDey: function (expense) {
        this.blance = this.blance - expense;
        console.log('here is', this);
        return this.blance;


    }
}

const heroBalam = {
    id: 120,
    blance: 6000,
    name: 'hero alam'

}
Ramim.treatDey(120);

const heroTreatDey = Ramim.treatDey.bind(heroBalam);
heroTreatDey(500)


const normal = {
    id: 120,
    blance: 8000,
    name: 'normal'

}
const normalTreatdey = Ramim.treatDey.bind(normal)
normalTreatdey(2000)