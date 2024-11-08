import axios from 'axios'

export type AddressResult = {
    placeId: string,
    streetNumber: string | undefined,
    streetName: string,
    countryCode: string,
    country: string,
    freeformAddress: string,
    municipality: string,
    postalCode: string,
}

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<[AddressResult]> {
    const autocomplete = await axios.get(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key,
            limit: 100,
            countrySet: 'AU',
        }
    });
    return autocomplete.data.results.map((result) => {
        return {
            placeId: result.id,
            streetNumber: result.address.streetNumber,
            streetName: result.address.streetName,
            countryCode: result.address.countryCode,
            country: result.address.country,
            freeformAddress: result.address.freeformAddress,
            municipality: result.address.municipality,
            postalCode: result.address.postalCode,
        }
    })
}
