basic.forever(function on_forever() {
    if (input.temperature() > 22) {
        basic.showString("Calor!")
    } else {
        basic.showString("Fred!")
    }
    
})
basic.forever(function on_forever2() {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    }
    
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    } else {
        
    }
    
})
