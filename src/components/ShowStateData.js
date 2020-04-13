import React from 'react'

const ShowStateData = (props) => {

    const data = props.selectedDisease
    const maf = props.mafData
    const measles = props.measlesData
    const rabies = props.rabiesData

    const header = () => {
        if (props.selectedState != "NULL"){
            return(
                <p>{props.selectedState} {data}</p>
            )
        } else {
            return(
                <p>Select State and Disease</p>
            )
        }
        
    }

    const mumpsIterator = () => {
        let stateDataArr = []
        let totalDataArr = []
        props.mafData.map(dataPoint => {
            if (dataPoint.reporting_area === props.selectedState){
                stateDataArr.push(dataPoint)
            }
            if (dataPoint.reporting_area === "TOTAL"){
                totalDataArr.push(dataPoint)
            }
        })

        let myState = stateDataArr[stateDataArr.length - 1]
        if(myState != null || myState != undefined){
            let cases = myState.mumps_cum_2020 > 0 ? myState.mumps_cum_2020 : 0;
            return(
                <div>
                    <p>State: {props.selectedState}</p>
                    <p>Week: {myState.mmwr_week}</p>
                    <p>2020 Cases: {cases}</p>
                </div>
            )
        } else {
            let myTotal = totalDataArr[totalDataArr.length - 1]
            if (myTotal != null || myTotal != undefined){
                let cases = myTotal.mumps_cum_2020 > 0 ? myTotal.mumps_cum_2020 : 0;
                return(
                    <div>
                        <p>Week: {myTotal.mmwr_week}</p>
                        <p>Total US Cases: {cases}</p>
                    </div>
                )
            }
        }
    }

    const rabiesIterator = () => {
        let stateDataArr = []
        let totalDataArr = []
        props.rabiesData.map(dataPoint => {
            if (dataPoint.reporting_area === props.selectedState){
                stateDataArr.push(dataPoint)
            }
            if (dataPoint.reporting_area === "TOTAL"){
                totalDataArr.push(dataPoint)
            }

        })
        let myState = stateDataArr[stateDataArr.length - 1]
        if(myState != null || myState != undefined){
            let animalCases = myState.rabies_animal_previous_52 > 0 ? myState.rabies_animal_previous_52 : 0;
            let humanCases = myState.rabies_human_previous_52 > 0 ? myState.rabies_human_previous_52 : 0;
            return(
                <div>
                    <p>State: {props.selectedState}</p>
                    <p>Week: {myState.mmwr_week}</p>
                    <p>2020 Animal Cases: {animalCases}</p>
                    <p>2020 Human Cases: {humanCases}</p>
                </div>
            )
        } else {
            console.log(totalDataArr)
            let myTotal = totalDataArr[totalDataArr.length - 1]
            if (myTotal != null || myTotal != undefined){
                let animalCases = myTotal.rabies_animal_cum_2020 > 0 ? myTotal.rabies_animal_cum_2020 : 0;
                let humanCases = myTotal.rabies_human_cum_2020 > 0 ? myTotal.rabies_human_cum_2020 : 0;
                return(
                    <div>
                        <p>Week: {myTotal.mmwr_week}</p>
                        <p>Total US Cases (Animal & Human)</p>
                        <p>Animal: {animalCases}</p>
                        <p>Human: {humanCases}</p>
                    </div>
                )
            }
        }
    }

    const measlesIterator = () => {
        console.log("measles")
    }

    const stateDiseaseArrayIterator = (selectedDisease) => {
        switch(selectedDisease){
            case "RABIES":
                return rabiesIterator()
            case "MUMPS":
                return (
                    <div>
                        {mumpsIterator()}
                    </div>
                )
            case "MEASLES":
                return measlesIterator()
            default:
                return(
                    <div>
                        { header()}
                    </div>
                )
        }
        // if(selectedDisease === "MEASLES"){

        // } else if (selectedDisease === "MUMPS"){
        //     return(
        //         <div>
        //             {mumpsIterator()}
        //         </div>
        //     )
        // } else if (selectedDisease === "RABIES"){
        //     return(
        //         <div>
        //             {rabiesIterator()}
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             {header()}
        //         </div>
        //     )
        // }
    }

    return(
        <div>
            {header()}
            {stateDiseaseArrayIterator(data)}
        </div>
    )
}

export default ShowStateData;