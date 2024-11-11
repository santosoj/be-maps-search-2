import { getPlaceAutocomplete } from './maps-api'

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

export async function getAutoCompleteDetails(address: any): Promise<[AddressResult]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    // get autocomplete results
    const res = getPlaceAutocomplete(apiKey, address, { countrySet: 'AU' }).then(async (autocompleteResults) => {
        return autocompleteResults.map((result) => ({
            placeId: result.id,
            streetNumber: result.address.streetNumber,
            streetName: result.address.streetName,
            countryCode: result.address.countryCode,
            country: result.address.country,
            freeformAddress: result.address.freeformAddress,
            municipality: result.address.municipality,
            postalCode: result.address.postalCode,
        }))
    })
    return res
}
