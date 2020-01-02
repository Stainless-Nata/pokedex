export const apiCall = (link) => {
    let people = [];
    people = fetch(link)
        .then(data => data.json())
        .then(data => data.results)
        //.then(data => getMorePeople(data.results, data.next))
        .then(people => getSpecies(people))
    return people;
}

async function getMorePeople(people, link) {
    let tempPeople = [];
    let nextLink = undefined;
    for (let i = 0; i < 6; i++) {
        link = (nextLink === undefined) ? link : nextLink;
        let data = await fetch(link);
        let data_json = await data.json();
        let morePeople = data_json.results;

        nextLink = await data_json.next;
        tempPeople = [...tempPeople, ...morePeople];
    }
    return tempPeople;
}


function getSpecies(people) {
    people.map((person, i) => {
        fetch(person.species[0])
            .then(data => data.json())
            .then(data => { people[i].species = data.name })
        return person;
    })
    return people;
}
