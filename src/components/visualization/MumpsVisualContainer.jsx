import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import MumpsVisualColumn from './MumpsVisualColumn'

const MumpsVisualContainer = (props) => {

    const stateChoice = props.stateChoice
    const [data, setData] = useState([])
    let filteredData = []

    React.useEffect(() => {
        const dataFetch = async () => {
            const cdcMumpsOpenDataResponse = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
            const cdcMumpsOpenDataData = await cdcMumpsOpenDataResponse.json()
            setData(cdcMumpsOpenDataData)
        }
        dataFetch()
    }, [])

    function stateFilter () {
        data.map(dataPoint => {
            if(stateChoice !== null){
                if(dataPoint.reporting_area === stateChoice.toUpperCase()){
                    filteredData.push(dataPoint)
                }
            } else {
                if(dataPoint.reporting_area === "TOTAL"){
                    filteredData.push(dataPoint)
                }
            }
        })
    }

    return(
        <Container>
            {stateFilter()}
            <MumpsVisualColumn filteredData={filteredData} diseaseChoice={props.diseaseChoice}/>
        </Container>
    )
}

export default MumpsVisualContainer