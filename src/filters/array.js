export default search = (v, str) => {
    let result = v.filter(obj => {
        
        let values_including_string = Object.values(obj).filter(val => {
            return val.includes(str)
        })

        return values_including_string.length > 0
    })

    return result 
}

export default att = (v, delimiter) => {
    let result = ''

    for (const str in arr) {
        if(str == arr.length - 1){
            result += arr[str]
        } else {
            result += arr[str] + delimiter 
        }
            
    }

    return result
}

export default aott = (v, key, delimiter) => {
    let result = ''
    for (const i in obj) {
        if(obj[i][key]){
            if(i == obj.length - 1)
                result += obj[i][key] 
            else
                result += obj[i][key] + delimiter
        }
    }
    return result
}