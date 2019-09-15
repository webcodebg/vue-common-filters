export function merge(a, b){
    for(var idx in b) {
        a[idx] = b[idx];
    }
    return a
}