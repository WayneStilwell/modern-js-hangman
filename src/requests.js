const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((result) => result.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=ef07bb2557cbac')
    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to get location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    // return await getCountry(location.country)
    // Line below is equal to line above
    return getCountry(location.country)
}

export { getPuzzle as default }