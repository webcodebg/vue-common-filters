export const truncate = (v, stop, clamp) => {
    return v.slice(0, stop) + (stop < v.length ? clamp || window.__vcf_settings.text.truncateClamp : '')
}

export const trim = (v) => {
    return v.trim()
}

export const capitalize = (v) => {
    return v[0].toUpperCase() + v.slice(1);
}

export const uppercase = (v) => {
    return v.toUpperCase();
}

export const lowercase = (v) => {
    return v.toLowerCase();
}