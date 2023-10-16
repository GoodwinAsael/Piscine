function promiseMe(message) {
    return new Promise((resolve, reject) => {

        if (typeof message === 'string') {
            resolve(`I promise you to ${message}`);
        }
        else {
        reject(`erreur, veuillez vérifier votre message, il doit être une string : ${message}`)
        }
    });
}

// let maVar;
promiseMe('2')

    .then( (value) => {
        console.log(value)
    //     maVar = value
    //    console.log(maVar)
    } )

    .catch((value) => {
        console.log(value)
    }
)

