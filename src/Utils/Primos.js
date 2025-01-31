function detEsPrimo(numero) {
    if(numero <= 1) return false;
    for (let index = 2; index < numero; index++) {
        if(numero % index === 0) return false;
    }
    return true;
}

function Primos(n) {
    let primos = [];
    if(n<1) return 0;
    for (let i = 2; i <= 200; i++) {
        if(detEsPrimo(i)) primos.push(i);
    }
    return primos[n-1];
}
export {Primos};