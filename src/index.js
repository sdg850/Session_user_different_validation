import { validateValue } from './util.js'

const name = document.getElementById("name")
const password = document.getElementById('password')
const form = document.getElementById('form')

const elementMessage = document.querySelectorAll('[data-messages]')

function init() {
    form.addEventListener('submit', (e) => {

        const inputName = validateValue("Name")
        const inputPassword = validateValue("Password")

        console.log(name.value)

        if (inputName.isEmpty(name.value)) {
            inputName.showLogMessages(e, elementMessage[0])
        }


        if (inputPassword.isEmpty(password.value)) {
            inputPassword.showLogMessages(e, elementMessage[1])
        }

    });

}

init()

