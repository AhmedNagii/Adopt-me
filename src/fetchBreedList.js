const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const apiResposns = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    if (!apiResposns.ok) {
        throw new Error(`details/${animal} fetch is not ok`);
    }
    return apiResposns.json();
};


export default fetchBreedList;