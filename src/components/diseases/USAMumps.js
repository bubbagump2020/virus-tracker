import React from 'react'

const USAMumps = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        const fetchCDCMumps = async () => {
            const response = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
            const data = await response.json()
            setData(data)
        }
        fetchCDCMumps()
    }, [])
    return <div/>
}

export default USAMumps;