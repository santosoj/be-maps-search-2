import { getPlaceAutocomplete } from './maps-api'
import type { AddressResult } from './maps-api'

export async function getAutoCompleteDetails(address: any): Promise<[AddressResult]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    // get autocomplete results
    const res = getPlaceAutocomplete(apiKey, address).then(async (autocompleteResults) => {
        return autocompleteResults
    })
    return res
}
