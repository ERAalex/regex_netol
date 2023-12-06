
export default class Validation {
    constructor(name){
        this.name = name;
    }

    validateUsername() {
        // can't start or finish with numbers or symbols (-_)
        const checkLetters = /^[a-zA-Z]+[0-9-_a-zA-Z]*[a-zA-Z]+$/;
        // check totalNumbers
        const checkNumb = /\d{3,}/;
        
        if (!checkLetters.test(this.name)) {
            throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9), начинаться имя и заканчиваться может только на буквы');
        }

        if (this.name.match(checkNumb)) {
            console.log('Вы выбрали НЕ подходящее имя')
            throw new Error('Имя не подходит! Вы выбрали подряд 3 цифры');
            return
        } else {
            console.log('Имя выбрано верно')
        }     
    }
}

// const person = new Validation('_Alex')
// person.validateUsername()


