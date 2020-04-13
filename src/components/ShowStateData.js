import React from 'react'

const ShowStateData = (props) => {

    const header = () => {
        if (props.selectedState != "NULL"){
            return(
                <p>{props.selectedState}</p>
            )
        } else {
            return(
                <p>Select State and Disease</p>
            )
        }
        
    }

    const stateArrayIterator = () => {
        let statDataArr = []

        props.mafData.map(dataPoint => {
            if (dataPoint.reporting_area === props.selectedState){
                statDataArr.push(dataPoint)
            }
        })

        let myState = statDataArr[statDataArr.length - 1]

        // turn in to switch case
        if(myState != null || myState != undefined){
            let cases = myState.mumps_cum_2020 > 0 ? myState.mumps_cum_2020 : 0;
            return(
                <div>
                    <p>State: {props.selectedState}</p>
                    <p>Week: {myState.mmwr_week}</p>
                    <p>2020 Cases: {cases}</p>
                </div>
            )
        }
    }

    return(
        <div>
            {header()}
            {stateArrayIterator()}
        </div>
    )
}

export default ShowStateData;

// return (<div key={dataPoint.reporting_area_sort}>{showStateData(dataPoint)}</div>)