const student = {
    id: 101,
    blance: 5000,
    name: 'Rj Kibria',
    major: 'mathematics',
    isRich: false,
    subject: ['english', 'chemistry', 'physics', 'calculas', 'itihas'],
    bestFriend: {
        name: 'Tanjim',
        major: 'mathematic',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    khawaBondhu: function (expense, boksis) {
        this.blance = this.blance - expense - boksis;

        return this.blance;


    }
}
student.takeExam();

const remaining1 = student.khawaBondhu(450, 50);
const remaining2 = student.khawaBondhu(550, 100);
console.log(remaining2);

