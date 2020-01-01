export const apiCall = (link) => {
    return fetch(link).then(response => response.json())
}