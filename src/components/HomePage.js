import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allMafData } from '../redux/actions/mumpsAndFluActions'
import { allRabiesData } from '../redux/actions/rabiesActions'
import { allMeaslesData } from '../redux/actions/measlesActions'
import { FormRadio } from 'shards-react'
import USACounties from './USACounties'
import USAStates from './USAStates'
import USAMumps from './diseases/USAMumps'



const HomePage = () => {

    const dispatch = useDispatch()
    const {mafData} = useSelector(state => ({mafData: state.mumpsAndFluReducer.data}))
    const {rabiesData} = useSelector(state => ({rabiesData: state.rabiesReducer.data}))
    const {measlesData} = useSelector(state => ({measlesData: state.measlesReducer.data}))
    const allData = {
        maf: mafData,
        rab: rabiesData,
        mea: measlesData  
    }

    React.useEffect(() => {
        const fetchCDC = async () => {
            const mafResponse = await fetch('https://data.cdc.gov/resource/espg-acwi.json')
            const mafData = await mafResponse.json()
            dispatch(allMafData(mafData))
            const rabiesResponse = await fetch('https://data.cdc.gov/resource/6kf3-4udg.json')
            const rabiesData = await rabiesResponse.json()
            dispatch(allRabiesData(rabiesData))
            const measlesResponse = await fetch('https://data.cdc.gov/resource/7xhe-mv2e.json')
            const measlesData = await measlesResponse.json()
            dispatch(allMeaslesData(measlesData))
        }
        fetchCDC()
    }, [])



    return(
        <div>
            <h1>Various common diseases in the US, by State and by County</h1>
            <USAStates data={allData}/>
        </div>
    )
}

export default HomePage;

