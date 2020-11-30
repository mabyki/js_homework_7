// let Calc = function() {
//     this.get = function() {
//         this.a = +prompt('Введите первое число!');
//         this.b = +prompt('Введите второе число!');
//         this.oper = prompt('Введите операцию + - / *');
//         this.operations();
//     };
//     this.operations = function() {
//         switch(this.oper) {
//             case '+':
//                 this.sum = this.a + this.b;
//             break;
//             case '-':
//                 this.sum = this.a - this.b;
//             break;
//             case '*':
//                 this.sum = this.a * this.b;
//             break;
//             case '/':
//                 this.sum = this.a / this.b;
//             break;
//             default: this.sum = 'опа!';
//         }
//         this.result();
//     };
//     this.result = function() {
//         console.log(this.sum);
//     }
// }
// let calc = new Calc();
// calc.get()


// let Lamp = function() {
//     this.get = function(){
//         this.onPower = confirm('Лампа включена?');
//           if(this.onPower === false){
//               this.get();
//           }else{
//             this.power = prompt('Введите мощность в Вт/ч');
//             this.cost = prompt('Стоимость электроэнергии в рублях за кВт/ч');
//             this.time = prompt('Время горения лампы в минутах');
//             this.pay()
//           }
//     }

//     this.pay = function(){
//         this.sum = (this.power / 1000) * (this.time / 60) * this.cost;
//         document.write(`Лампочки горела ${this.time} минут, вы заплатите ${this.sum} рублей`);
//     }
// }
// let lamp = new Lamp();
// lamp.get()


let Teapot = function(){
    this.getInfo = function(){

        function checkPower(){
            this.power = +prompt('Введите мощность чайника! Вт');
            if(this.power > 0){
                return this.power;
            }else{
                return alert('Неверное значение'), checkPower();
            }
    }
        function checkSize(){
            this.size = +prompt('Введите объем чайника в литрах');
            if(this.size > 0){
                return this.size;
            }else{
                return alert('Неверное значение'), checkSize();
            }
    }
        function checkCapacity(){
            this.capacity = +prompt('Введите объем воды в литрах');
            if(this.capacity > 0 && this.capacity <= this.size){
                return this.capacity;
            }else{
                return alert('Неверное значение'), checkCapacity();
            }
        }
        this.onPower = confirm('Включить чайник?'); 
            if(this.onPower === true){
                this.power = checkPower();
                this.size = checkSize();
                this.capacity = checkCapacity();
                this.timeBoil();
                }else{
                  this.power = 0;
                  this.size = 0;
                  this.capacity = 0;
                  this.time = 0;
                  this.result();
            }
        }

    this.timeBoil = function(){
        this.c = 4183;
        this.t = 80;
        this.n = 0.8;
        this.time = (this.c * this.capacity * this.t) / this.power * this.n;
        this.result();
    }

    this.result = function(){
        document.write(`Время закипания ${this.capacity}л. воды ${this.time} секунд`);
    }
}

let tea = new Teapot();
tea.getInfo();
console.log(tea)