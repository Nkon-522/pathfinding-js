export function repeatString(n, str) {
    let res = ""
    for (let i = 0; i < n; i++) {
        res += str + " "
    } 
    return res
}
