function validateValue(inputName) {

    return {
        isEmpty: function (inputValue) {
            if (inputValue == ""
                || inputValue == undefined
                || inputValue == null) {
                return true
            }
            return false;
        },
        showLogMessages: function (e, elementMessage) {
            elementMessage.innerText = `${inputName} must be required`
            e.preventDefault()
        }

    }

}

export { validateValue }