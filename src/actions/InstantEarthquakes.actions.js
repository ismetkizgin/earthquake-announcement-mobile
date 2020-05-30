import { fetchApi } from '../service/apiFetch'

export const InstantEarthquakesList = async () => {
    const result = await fetchApi("/InstantEarthquakes", "GET", null, 200);
    if (result != null)
        return result

    return false;
}