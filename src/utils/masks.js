export const phoneMask = (value = "") => {

    let phoneNumeber;

    if (value.length >= 13) {
        phoneNumeber = value
            .replace(/\D/g, "")                
            .replace(/^(\d{2})(\d{1})(\d)/g, "$1 $2 $3")
            .replace(/(\d{4})(\d)/, "$1-$2") 
    }
    else {
        phoneNumeber = value
            .replace(/\D/g, "")                
            .replace(/^(\d\d)(\d)/g, "$1 $2")  
            .replace(/(\d{4})(\d)/, "$1-$2")
    }

    return phoneNumeber
}