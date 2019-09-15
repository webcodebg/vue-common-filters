export const currency = (v, symbol = null, decimalDigits = null, symbolOnLeft = null, spaceBetweenAmountAndSymbol = null) => {
    let settings = {...window.__vcf_settings.currency}

    if(symbol)
        settings.symbol = symbol
    if(decimalDigits)
        settings.decimalDigits = decimalDigits
    if(symbolOnLeft)
        settings.symbolOnLeft = symbolOnLeft
        
    let space = spaceBetweenAmountAndSymbol || settings.spaceBetweenAmountAndSymbol ? ' ' : ''
    let amount = Number(v).toFixed(settings.decimalDigits)
        
    if(symbolOnLeft){
        return `${symbol}${space}${amount}`
    } else {
        return `${amount}${space}${symbol}`
    }
}

export const decimal = (v, digits = null) => {
    let length = digits || window.__vcf_settings.numbers.formatDecimalDigits
    return Number(v).toFixed(length)
}