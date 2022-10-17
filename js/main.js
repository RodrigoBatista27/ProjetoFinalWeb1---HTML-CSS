const input = document.querySelector('input')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
        input.value += ' '
    }

})