export const currency = (v, symbol = null, decimalDigits = null, symbolOnLeft = null, spaceBetweenAmountAndSymbol = null) => {
    let settings = {...window.__vcf_settings.currency}

    if(decimalDigits)
        settings.decimalDigits = decimalDigits
    if(symbolOnLeft)
        settings.symbolOnLeft = symbolOnLeft
        
    let currency_symbol = symbol || settings.symbol;
    let space = spaceBetweenAmountAndSymbol || settings.spaceBetweenAmountAndSymbol ? ' ' : ''
    let amount = Number(v).toFixed(settings.decimalDigits)
        
    if(symbolOnLeft){
        return `${currency_symbol}${space}${amount}`
    } else {
        return `${amount}${space}${currency_symbol}`
    }
}


export const decimal = (v, digits = null) => {
    let length = digits || window.__vcf_settings.numbers.decimalDigits
    return Number(v).toFixed(length)
}