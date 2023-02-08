radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 42) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playMelody("C C E G C5 C5 - - ", 120)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(175, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.A, function () {
    tallet_mitt += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendNumber(tallet_mitt)
})
input.onButtonPressed(Button.B, function () {
    tallet_mitt += 1
})
let tallet_mitt = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(tallet_mitt)
})
