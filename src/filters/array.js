export function search(v, str) {
    let result = v.filter(obj => {
        
        let values_including_string = Object.values(obj).filter(val => {
            return val.includes(str)
        })

        return values_including_string.length > 0
    })

    return result 
}

export function ats(v, delimiter = null) {
    
    delimiter = delimiter || window.__vcf_settings.array.implodeDelimiter
    
    let result = ''

    for (const str in v) {
        if(str == v.length - 1){
            result += v[str]
        } else {
            result += v[str] + delimiter 
        }
            
    }

    return result
}

export function aots(v, key, delimiter = null) {
    delimiter = delimiter || window.__vcf_settings.array.implodeDelimiter
    let result = ''
    for (const i in v) {
        if(v[i][key]){
            if(i == v.length - 1)
                result += v[i][key] 
            else
                result += v[i][key] + delimiter
        }
    }
    return result
}