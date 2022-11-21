import Controls from "./controls.js"
import Sounds from "./screenSounds.js"

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const timer = document.querySelector('.timer')
const soundsScreen = document.querySelector('.sounds')
const playLight = document.querySelector('.playLight')
const playDark = document.querySelector('.playDark')
const stopLight = document.querySelector('.stopLight')
const stopDark = document.querySelector('.stopDark')
const increaseLight = document.querySelector('.increaseLight')
const increaseDark = document.querySelector('.increaseDark')
const decreaseLight = document.querySelector('.decreaseLight')
const decreaseDark = document.querySelector('.decreaseDark')


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShop = document.querySelector('.coffeShop')
const buttonFireplace = document.querySelector('.fireplace')

const buttonClickForest = document.querySelector('.clickForest')
const buttonClickRain = document.querySelector('.clickRain')
const buttonClickCoffeShop = document.querySelector('.clickCoffeShop')
const buttonClickFireplace = document.querySelector('.clickFireplace')

const sliderRain = document.querySelector('.divRain .slider')
const sliderForest = document.querySelector('.divForest .slider')
const sliderFireplace = document.querySelector('.divFireplace .slider')
const sliderCoffeShop = document.querySelector('.divCoffeShop .slider')
const sliderClickRain = document.querySelector('.divClickRain .slider')
const sliderClickForest = document.querySelector('.divClickForest .slider')
const sliderClickFireplace = document.querySelector('.divClickFireplace .slider')
const sliderClickCoffeShop = document.querySelector('.divClickCoffeShop .slider')


const imgForest = document.querySelector('.imgForest')
const imgRain = document.querySelector('.imgRain')
const imgCoffeShop = document.querySelector('.imgCoffeShop')
const imgFireplace = document.querySelector('.imgFireplace')

let AudioClick = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
let AudioForestClick = new Audio("./assets/forest.wav")
let AudioRainClick = new Audio("./assets/rain.wav")
let AudioFireplaceClick = new Audio("./assets/fireplace.wav")
let AudioCoffeShopClick = new Audio("./assets/coffeShop.wav")
let AudioFinish = new Audio("./assets/finish.mp3")
let minutes = Number(minutesDisplay.textContent)

const lightMode = document.querySelector('.lightMode')
const darkMode = document.querySelector('.darkMode')

let getSoundForest = document.querySelector('#myClickForest')
let getSoundRain = document.querySelector('#myClickRain')
let getSoundFireplace = document.querySelector('#myClickFireplace')
let getSoundCoffeShop = document.querySelector('#myClickCoffeShop')

let getForest = document.querySelector('#myForest')
let getRain = document.querySelector('#myRain')
let getFireplace = document.querySelector('#myFireplace')
let getCoffeShop = document.querySelector('#myCoffeShop')


getSoundForest.addEventListener('input', soundForest)
getSoundRain.addEventListener('input', soundRain)
getSoundFireplace.addEventListener('input', soundFireplace)
getSoundCoffeShop.addEventListener('input', soundCoffeShop)


lightMode.addEventListener('click', lightModeClick)
darkMode.addEventListener('click', darkModeClick)

function soundForest() {
    AudioForestClick.volume = getSoundForest.value/100
}

function soundRain() {
    AudioRainClick.volume = getSoundRain.value/100
}

function soundFireplace() {
    AudioFireplaceClick.volume = getSoundFireplace.value/100
}

function soundCoffeShop() {
    AudioCoffeShopClick.volume = getSoundCoffeShop.value/100
}

function inputForest() {
    sliderForest.classList.add('inpColor')
    sliderForest.classList.remove('slider')
}

function inputRain() {
    sliderRain.classList.add('inpColor')
    sliderRain.classList.remove('slider')
}

function inputFireplace() {
    sliderFireplace.classList.add('inpColor')
    sliderFireplace.classList.remove('slider')
}

function inputCoffeShop() {
    sliderCoffeShop.classList.add('inpColor')
    sliderCoffeShop.classList.remove('slider')
}

function inputClickForest() {
    sliderClickForest.classList.add('inpColor')
    sliderClickForest.classList.remove('slider')
}

function inputClickRain() {
    sliderClickRain.classList.add('inpColor')
    sliderClickRain.classList.remove('slider')
}

function inputClickFireplace() {
    sliderClickFireplace.classList.add('inpColor')
    sliderClickFireplace.classList.remove('slider')
}

function inputClickCoffeShop() {
    sliderClickCoffeShop.classList.add('inpColor')
    sliderClickCoffeShop.classList.remove('slider')
}

function inputWhite() {
    inputClickCoffeShop()
    inputClickFireplace()
    inputClickForest()
    inputClickRain()
    inputCoffeShop()
    inputFireplace()
    inputForest()
    inputRain()
}

function lightModeClick() {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    timer.classList.toggle('dark')
    soundsScreen.classList.toggle('dark')
    playLight.classList.toggle('hide')
    playDark.classList.toggle('hide')
    stopLight.classList.toggle('hide')
    stopDark.classList.toggle('hide')
    increaseLight.classList.toggle('hide')
    increaseDark.classList.toggle('hide')
    decreaseLight.classList.toggle('hide')
    decreaseDark.classList.toggle('hide')
    buttonForest.classList.toggle('btnSound')
    buttonRain.classList.toggle('btnSound')
    buttonCoffeShop.classList.toggle('btnSound')
    buttonFireplace.classList.toggle('btnSound')
    inputWhite()
}

function darkModeClick() {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    timer.classList.toggle('dark')
    soundsScreen.classList.toggle('dark')
    playLight.classList.toggle('hide')
    playDark.classList.toggle('hide')
    stopLight.classList.toggle('hide')
    stopDark.classList.toggle('hide')
    increaseLight.classList.toggle('hide')
    increaseDark.classList.toggle('hide')
    decreaseLight.classList.toggle('hide')
    decreaseDark.classList.toggle('hide')
    buttonForest.classList.toggle('btnSound')
    buttonRain.classList.toggle('btnSound')
    buttonCoffeShop.classList.toggle('btnSound')
    buttonFireplace.classList.toggle('btnSound')
    inputWhite()
}

const controls = Controls({
    minutesDisplay,
    secondsDisplay,
    AudioFinish,
})

const sounds = Sounds({
    AudioCoffeShopClick,
    AudioFireplaceClick,
    AudioForestClick,
    AudioRainClick,
    buttonForest,
    buttonClickFireplace,
    buttonClickCoffeShop,
    buttonClickForest,
    buttonClickRain,
    buttonCoffeShop,
    buttonRain,
    buttonFireplace,
    imgCoffeShop,
    imgFireplace,
    imgForest,
    imgRain,
    getForest,
    getCoffeShop,
    getFireplace,
    getRain,
    getSoundForest,
    getSoundFireplace,
    getSoundCoffeShop,
    getSoundRain,
    inputCoffeShop,
    inputFireplace,
    inputForest,
    inputRain,
    inputClickCoffeShop,
    inputClickFireplace,
    inputClickForest,
    inputClickRain
})

function stop() {
    screenInitial()
}

function screenInitial() {
    buttonForest.classList.remove('hide')
    buttonClickForest.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonClickRain.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonClickCoffeShop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonClickFireplace.classList.add('hide')
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffeShop.classList.add('hide')
    imgFireplace.classList.add('hide')
    sounds.soundOff(AudioCoffeShopClick, AudioFireplaceClick, AudioForestClick)
    AudioRainClick.pause()
    controls.updateTimerDisplay(minutes, 0)
}  

buttonIncrease.addEventListener('click', function(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + Number(5)).padStart(2, '0')
    AudioClick.play()
})

buttonDecrease.addEventListener('click', function() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - Number(5)).padStart(2, '0')
    AudioClick.play()
})


buttonPlay.addEventListener('click', function() {
    controls.countdown()
    AudioClick.play()
})

buttonStop.addEventListener('click', function() {
    stop()
    AudioClick.play()
    controls.hold()
})


buttonForest.addEventListener('click',sounds.forest)

buttonRain.addEventListener('click',sounds.rain)

buttonCoffeShop.addEventListener('click' , sounds.coffeShop)

buttonFireplace.addEventListener('click', sounds.fireplace)