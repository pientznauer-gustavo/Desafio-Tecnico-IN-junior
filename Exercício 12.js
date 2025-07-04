function encontrarElementoUnico(array) {
    let unico = 0;
    
    for (let i = 0; i < array.length; i++) {
        unico ^= array[i]; 
    }
    return unico;
}

let a = [6,6,1,3,2,2,1,7,7]
console.log(encontrarElementoUnico(a)); 
