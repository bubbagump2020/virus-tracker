import mafData from '../CDCJsonfiles/mumpsNovelAFlu.json'

const regionCruncher = () => {
    let dataArray = []
    mafData.data.map(dataPoint => {
        dataArray.push(dataPoint[8])
    })
    return dataArray
}

export default regionCruncher