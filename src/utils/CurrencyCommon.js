export function formatCash(cash) {
    const str = cash.toString();
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}