def on_forever():
    if input.temperature() > 22:
        basic.show_string("Calor!")
    else:
        basic.show_string("Fred!")
basic.forever(on_forever)

def on_forever2():
    if input.light_level() > 200:
        music.play(music.string_playable("E D G F B A C5 B ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.light_level() < 50:
        music.play(music.string_playable("C5 G B A F A C5 B ", 120),
            music.PlaybackMode.UNTIL_DONE)
    else:
        pass
basic.forever(on_forever2)
