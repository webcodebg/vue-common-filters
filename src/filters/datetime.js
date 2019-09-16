import moment from 'moment'

export const format = (v, format) => {
    let f = format || window.__vcf_settings.dates.filterConvertFormat 
    return moment(v, window.__vcf_settings.dates.defaultFormat).format(f)
}

export const fromNow = (v) => {
    return moment(v, window.__vcf_settings.dates.defaultFormat).fromNow()
} 


export const from = (v, from) => {
    return moment(v, window.__vcf_settings.dates.defaultFormat).from(from)
}

export const to = (v, to) => {
    return moment(v, window.__vcf_settings.dates.defaultFormat).to(to)
}


export const add = (v, number, type) => {
    return moment(v, window.__vcf_settings.dates.defaultFormat).add(number, type)
}

export const subtract = (v, number, type) => {
    return moment(v, window.__vcf_settings.dates.defaultFormat).subtract(number, type)
}