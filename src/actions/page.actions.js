import { fetchApi } from '../service/apiFetch'

export const RescueWorksList = async () => {
    const result = await fetchApi("/rescue-works", "GET", null, 200);
    if (result != null)
        return result

    return false;
}

export const NewsList = async () => {
    const result = await fetchApi("/News", "GET", null, 200);
    if (result != null)
        return result

    return false;
}