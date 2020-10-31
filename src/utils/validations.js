const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?(\.[a-z]+)?$/i
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/

export const completeNameValidation = (name) => {
    const errors = []

    if (!regexName.test(name)) {
        errors.push('Insira um nome válido!\n')
    }
    else if (name.split(" ").length === 1) {
        errors.push('Insira o nome completo!\n')
    }

    return [errors.length === 0, errors]
}

export const emailValidation = (email) => {
    const errors = []

    if (!regexEmail.test(email))
        errors.push('Insira um email válido!\n')

    return [errors.length === 0, errors]
}

export const passValidation = (pass = '') => {
    const errors = []

    if (pass.length < 4) {
        errors.push('A senha deve conter no mino 4 caracteres\n')
    }
    else if(!regexPass.test(pass)){
        errors.push('A senha deve conter letra maiuscula e minuscula\n')
    }

    return [errors.length === 0, errors]
}

export const telefoneValidation = (telefone) => {
    const errors = []

    if (telefone.trim().length < 13 || telefone.trim().length > 14) {
        errors.push('Insira um telefone válido!\n')
    }

    return [errors.length === 0, errors]
<<<<<<< HEAD
=======
}

export const rgValidation = (rg) => {
    const errors = []

    if (rg.trim().length < 12 || rg.trim().length > 13) {
        errors.push('Insira um rg válido!\n')
    }

    return [errors.length === 0, errors]
>>>>>>> dev
}