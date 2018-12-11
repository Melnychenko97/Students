// Нужно сделать конструктор сущности Студент.
//
//     У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.
//
//     Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив это свойство, present и absent — методы.

function Student( name, surname, birthDate, marks) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.marks = marks;
    this.attendance =new Array(25);
}
const attendanceLimit = 25 ;
let counter = 0;

    Student.prototype.getAge = function () {
    return 2018 - this.birthDate;
};

Student.prototype.getAverageScore = function () {
    const totalCount = this.marks.reduce(function (prev, current) {
            return prev + current;
        });
    return Math.round(totalCount / this.marks.length);
    };

Student.prototype.present = function () {
   if(counter !== attendanceLimit ) {
    this.attendance[counter] = true;
    counter++
   }

};

Student.prototype.absent = function () {
    if(counter !== attendanceLimit) {
        this.attendance[counter] = false;
        counter++;
    }
};
const melnychenko = new Student( "Ivan", "Melnychenko", 1997, [5,3,2,5,4,3]);

melnychenko.getAge();
melnychenko.getAverageScore();
melnychenko.present();
melnychenko.absent();

for (let i = 0; i < 5; i++) {
    melnychenko.present();
}
for (let i = 0; i < 50; i++) {
    melnychenko.absent();
}
console.log(melnychenko.attendance);

