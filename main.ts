radio.onReceivedString(function (receivedString) {
    if (receivedString == "alerte_t") {
        basic.showIcon(IconNames.Skull)
        soundExpression.giggle.playUntilDone()
        basic.pause(5000)
    }
})
radio.setGroup(42)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
