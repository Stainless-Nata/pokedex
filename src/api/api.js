export const apiCall = (link) => {

    return fetch(link)
        .then(data => data.json())
        .then(data => data.results)
}