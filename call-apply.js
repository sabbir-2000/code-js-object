const Ramim = {
    id: 101,
    blance: 5000,
    name: 'md.ramim',
    treatDey: function (expense, boksis, tax) {
        this.blance = this.blance - expense - boksis - tax;
        console.log('here is', this);
        return this.blance;


    }
}

const heroBalam = {
    id: 120,
    blance: 6000,
    name: 'hero alam'

}
// Ramim.treatDey(120);

const heroTreatDey = Ramim.treatDey.bind(heroBalam);


const normal = {
    id: 120,
    blance: 8000,
    name: 'normal'

}

// Ramim.treatDey.call(heroBalam, 500, 100, 50);
// Ramim.treatDey.call(heroBalam, 300, 50, 20)

Ramim.treatDey.apply(heroBalam, [500, 100, 80])
Ramim.treatDey.apply(heroBalam, [1000, 150, 90])
Ramim.treatDey.apply(normal, [1020, 120, 20])