export const truncate = (v, stop, clamp) => {
    return v.slice(0, stop) + (stop < v.length ? clamp || '...' : '')
}

export const trim = (v) => {
    return v.trim()
}