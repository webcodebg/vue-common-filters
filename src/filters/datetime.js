import moment from 'moment'

export const format = (v, format) => {
    moment(v, window.__vcf_settings.dates.format).format(format)
}

export const fromNow = (v) => {
    moment(v, window.__vcf_settings.dates.format).fromNow()
}


export const from = (v, from) => {
    moment(v, window.__vcf_settings.dates.format).from(from)
}

export const to = (v, to) => {
    moment(v, window.__vcf_settings.dates.format).to(to)
}


export const add = (v, number, type) => {
    moment(v, window.__vcf_settings.dates.format).add(number, type)
}

export const substract = (v, number, type) => {
    moment(v, window.__vcf_settings.dates.format).substract(number, type)
}