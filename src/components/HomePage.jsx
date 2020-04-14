import React from 'react'
import regionCruncher from '../DataCrunching/Regions'
import mafData from '../CDCJsonfiles/mumpsNovelAFlu.json'
import AL_MaF_Sorter from '../DataCrunching/MaF_Crunching/AL_MaF_Sorter'
import AL_DataVisContainer from './DataVisualization/AL_DATA_VIS/AL_DataVisContainer'
import RegionSelector from './RegionSelector'


const HomePage = () => {

    const regions = regionCruncher()
    const alMaFCrunch = AL_MaF_Sorter()

    const [selState, setSelState] = React.useState({
        name: null
    })

    const onStateChange = (value) => {
        setSelState({ ...selState, name: value })
    }

    /*
        Column 8 is reporting_area. i.e. state or region
        Column 9 is mmwr year
        Column 10 is mmwr_week
        Column 11 is mumps_current_week. Reminder data is string not number, need to parseInt
        Column 12 is mumps_current_week_flag
        Column 15 is mumps_cum_2020. Same reminder from column 11
        Column 16 is mumps_cum_2020_flag
    */


    // console.log(mafData.meta.view.columns)
    // // console.log(mAfData.data)
    // let totalCount = 0
    // mAfData.data.map(data => {
    //     console.log(data[8])
    //     if(data[11] === null || data[11] === undefined){
    //         data[11] = 0
    //         // totalCount = totalCount + data[11]
    //     } else {
    //         totalCount = parseInt(data[11]) + totalCount
    //     }
        
    // })
    // console.log(totalCount)
    const whichRegion = () => {

    }

    return(
        <div>
            <RegionSelector onChange={onStateChange} selState={selState.name}/>
        </div>
    )
}

export default HomePage;

