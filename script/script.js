let Calc = function() {
    this.get = function() {
        this.a = 5;
        this.b = 10;
        this.oper = '*';
        this.operations();
    };
    this.operations = function() {
        switch(this.oper) {
            case '+':
                this.sum = this.a + this.b;
            break;
            case '-':
                this.sum = this.a - this.b;
            break;
            case '*':
                this.sum = this.a * this.b;
            break;
            case '/':
                this.sum = this.a / this.b;
            break;
            default: this.sum = 'опа!';
        }
        this.result();
    };
    this.result = function() {
        console.log(this.sum);
    }
}
let calc = new Calc();
calc.get()
console.log(calc)


// let Lamp = function() {
//     this.get = function(){
//          this.power = prompt('Введите мощность');
//          this.cost = prompt('Стоимость электроэнергии');
//          this.onPower = confirm('Лампа включена?');
//          this.time = prompt('Время горения лампы');
//     }
// }