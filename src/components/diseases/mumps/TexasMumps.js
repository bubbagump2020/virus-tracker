import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'
import UsaMap from '../../map/usa.json'

const TexasMumps = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {

        const fetchCDC = async () => {
            const response = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
            const data = await response.json()
            setData(data)//.filter(dataSet => dataSet.reporting_area === "TEXAS"))
            
        }
       fetchCDC()
    }, [])

    let mumpsTotal = 0;

    const showTexasMumps = (data) => {
        console.log(UsaMap)
        return data.map(dataPoint => {
            return(
                <div>
                    {dataPoint.reporting_area}, Week: {parseInt(dataPoint.mmwr_week)}, Cases this week: {dataPoint.mumps_current_week}
                    <div>
                        {dataPoint.reporting_area}'s previous 52 weeks: {dataPoint.mumps_previous_52_weeks_max}
                    </div>
                </div>
            )
        })
    }

    return(
        <div>
            <VectorMap {...UsaMap} />
        </div>
    )
}

export default TexasMumps;