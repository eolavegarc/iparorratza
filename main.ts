basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if ((input.compassHeading() == 45) < (input.compassHeading() == 315)) {
        music.playMelody("E B C5 A B G A F ", 300)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
