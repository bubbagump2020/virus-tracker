import React from 'react'
import AL_DataVisContainer from './DataVisualization/AL_DATA_VIS/AL_DataVisContainer'
import regionCruncher from '../DataCrunching/Regions'

const RegionSelector = (props) => {

    let uniqueOptions = regionCruncher().sort()
    uniqueOptions = new Set(uniqueOptions)
    const totalOptions = Array.from(uniqueOptions)

    const showOptions = () => {
        const checkOptions = (option, index, arr) => {
            console.log(index)
        }
       
        console.log(totalOptions.forEach(checkOptions))
    }


    return(
        <div>
            {showOptions()}
        </div>
    )
}

export default RegionSelector