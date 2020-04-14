import mafData from '../../CDCJsonfiles/mumpsNovelAFlu.json'
import regionCruncher from '../Regions'

const AL_MaF_Sorter = () => {
    let alState = null
    let alabamaDataArray = []
    regionCruncher().map(name => {
        if(name === "ALABAMA") alState = name
    })
    mafData.data.map(array => {
        if(array[8] === alState){
            alabamaDataArray.push(array)
        }
    })
    return alabamaDataArray
}

export default AL_MaF_Sorter