export function defineQueryParams (params) {
    return new URLSearchParams(
        Object.entries(params).filter(([key, value]) => value !== undefined)
    )
}