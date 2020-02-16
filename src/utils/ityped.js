import { init } from 'ityped'

export const typewords = (el, words, onFinished) => {
  init(el, {
    strings: words,
    typeSpeed: 220,
    backSpeed: 100,
    startDelay: 1000,
    backDelay: 500,
    loop: false,
    showCursor: false,
    cursorChar: '|',
    onFinished: onFinished
  })
}
