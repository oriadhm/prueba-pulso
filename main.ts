/**
 * En el Pin 2 conectamos el aro del alambre y en el GND conectamos el circuito que hemos hecho con el alambre.
 */
/**
 * En el Pin O se conecta un zumbador y la otra patilla al GND
 */
/**
 * En el Pin 1 conectamos el pulsador y la otra patilla a GND
 */
basic.showIcon(IconNames.Heart)
let Puntos = 10
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
basic.forever(function () {
    basic.showNumber(Puntos)
    if (input.pinIsPressed(TouchPin.P2)) {
        Puntos += -1
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        Puntos = 10
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
    }
    if (Puntos == 0) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
        basic.pause(4000)
        Puntos = 10
    }
})
