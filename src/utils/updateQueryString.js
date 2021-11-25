export const updateQueryString = (history, attributeToUpdate, value) => {
    let route = history.location.pathname
    let queryStr = history.location.search || "?timkiem="

    if (history.location.search.search(attributeToUpdate) === -1) {
        return `/products${queryStr}&${attributeToUpdate}=${value}`
    }
    else {

        let attributes = queryStr.split("&")
        let newQueryStr = []
        for (let i = 0; i < attributes.length; ++i) {
            if (attributes[i].search(attributeToUpdate) !== -1) {
                attributes[i] = `${attributeToUpdate}=${value}`
            }
            newQueryStr.push(attributes[i])
        }
        return newQueryStr.join("&")
    }

}