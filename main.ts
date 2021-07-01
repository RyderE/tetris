let ranum_1 = 0
let down = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    ranum_1 = randint(0, 4)
    led.plot(ranum_1, 0)
    basic.pause(100)
    for (let index = 0; index < 25; index++) {
        led.plot(ranum_1, ranum_1 + 1)
        down = ranum_1
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
