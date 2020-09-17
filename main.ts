input.onButtonPressed(Button.A, function () {
    basic.showNumber(pesos)
    basic.showString("MXN=")
    basic.showNumber(dollars)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pesos)
    basic.showString("MXN=")
    basic.showNumber(euros)
    basic.showString("EUR")
})
let euros = 0
let dollars = 0
let pesos = 0
basic.showString("Fernanda Esparza A01285313")
pesos = 5
dollars = pesos * 21.2917
euros = pesos * 25.2917
basic.forever(function () {
	
})
