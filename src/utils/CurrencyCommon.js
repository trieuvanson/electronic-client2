export function formatCash(cash) {
    const str = cash.toString();
    return str.split('').reduce((prev, next, index) => {
        return ((index % 3) ? prev : (prev + '.')) + next
    })
}