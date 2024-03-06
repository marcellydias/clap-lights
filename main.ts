input.onSound(DetectedSound.Loud, function () {
    luzesOn = !(luzesOn)
    if (luzesOn) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
let luzesOn = false
input.setSoundThreshold(SoundThreshold.Loud, 200)
