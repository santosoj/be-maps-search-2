import axios from 'axios'


// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string, additionalParams: { [k: string]: string }): Promise<[any]> {
    const autocomplete = await axios.get(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key,
            limit: 100,
            ...additionalParams
        }
    });
    return autocomplete.data.results
}
