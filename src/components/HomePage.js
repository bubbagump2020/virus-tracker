import React from 'react'
import ShowStateData from './ShowStateData'
import StateSelect from './StateSelect'
import { stateAbbrev } from './StateAbbrev'
import { diseases } from './Diseases'
import DiseaseSelect from './DiseaseSelect'



const HomePage = () => {


    const [mafData, setMafData] = React.useState([])
    const [rabiesData, setRabiesData] = React.useState([])
    const [measlesData, setMeaslesData] = React.useState([])
    const [stateData, setStateData] = React.useState({})
    const [selectedDisease, setSelectedDisease] = React.useState({
        name: "null"
    })
    const [selectedState, setSelectedState] = React.useState({
        name: "null"
    })

    const onStateChange = (value) => {
        setSelectedState({ ...selectedState, name: value })
    }

    const onDiseaseChange = (value) => {
        setSelectedDisease({ ...selectedDisease, name: value })
    }

    const onStateChangeData = (value) => {
        setStateData(value)
    }

    React.useEffect(() => {
        const fetchCDC = async () => {
            const mafResponse = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
            const mafData = await mafResponse.json()
            setMafData(mafData)
            const rabiesResponse = await fetch('https://data.cdc.gov/resource/6kf3-4udg.json')
            const rabiesData = await rabiesResponse.json()
            setRabiesData(rabiesData)
            const measlesResponse = await fetch('https://data.cdc.gov/resource/7xhe-mv2e.json')
            const measlesData = await measlesResponse.json()
            setMeaslesData(measlesData)
        }
        fetchCDC()
    }, [])

    return(
        <div>
            <div>
                <ShowStateData
                    mafData={mafData}
                    rabiesData={rabiesData}
                    measlesData={measlesData}
                    selectedDisease={selectedDisease.name.toUpperCase() }
                    selectedState={selectedState.name.toUpperCase()}
                    selectedStateData={stateData}
                />
            </div>
            <div>
                <DiseaseSelect
                    allDiseases={diseases}
                    onChange={onDiseaseChange}
                    selectedDisease={selectedDisease}
                />
            </div>
            <br></br>
            <div>
                <StateSelect
                    allStates={stateAbbrev}
                    onChange={onStateChange}
                    selectedState={selectedState}
                />
            </div>
        </div>
    )
}

export default HomePage;

