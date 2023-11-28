// Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
//
//Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

const ramdomNumber = Math.round(Math.random() * 101);
console.log(ramdomNumber);

function cheсkNumber(){
	let myNumber = document.querySelector('.checkNumberInput').value;

	if (myNumber < ramdomNumber) {
		alert('введите число побольше')
	} else if (myNumber > ramdomNumber) {
		alert('введите число поменьше')
	} else {
		alert('всё верно')
	}
}