let RPS = 0
input.onGesture(Gesture.Shake, function () {
    RPS = randint(1, 3)
    if (RPS == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (RPS == 2) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (RPS == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
