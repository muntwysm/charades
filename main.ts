input.onButtonPressed(Button.A, function () {
    index = randint(0, textList.length - 1)
    basic.showString("" + (textList[index]))
})
let index = 0
let textList: string[] = []
game.startCountdown(30000)
textList = ["Apple", "Banana", "Pear"]
index = 0
