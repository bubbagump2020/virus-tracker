const mumpsData = async () => {
    const cdcMumpsOpenDataResponse = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
    const cdcMumpsOpenDataData = await cdcMumpsOpenDataResponse.json()
    return cdcMumpsOpenDataData
}

export default mumpsData