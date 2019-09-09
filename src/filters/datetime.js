import moment from 'moment'

export const format = (v, format) => {
    moment(v).format(format)
}

export const fromNow = (v) => {
    moment(v).fromNow()
}