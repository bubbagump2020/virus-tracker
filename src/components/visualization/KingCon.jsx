import React, { useState } from 'react'
import MumpsVisualContainer from '../visualization/MumpsVisualContainer'
import LymeDiseaseVisualContainer from './LymeDiseaseVisualContainer'
import SDForm from './SDForm'


const KingCon = () => {

    const [stateChoice, setStateChoice] = useState(null)
    const [diseaseChoice, setDiseaseChoice] = useState(null)

    const handleStateChange = (event) => {
        const item = event.target.value
        event.preventDefault()
        setStateChoice(item)
    }
    const handleDiseaseChange = (event) => {
        const item = event.target.value
        event.preventDefault()
        setDiseaseChoice(item)
    }

    const decisionTree = (choiceA, choiceB) => {
        switch(choiceB){
            case "Lyme Disease":
                return(
                    <div>
                        <LymeDiseaseVisualContainer stateChoice={stateChoice}/>
                    </div>
                )
            case "Meningococcal":
                return(
                    <div>

                    </div>
                )
            case "Mumps":
                return(
                    <div>
                        <MumpsVisualContainer stateChoice={stateChoice} diseaseChoice={diseaseChoice}/>
                    </div>
                )
            case "Tuberculosis":
                return(
                    <div>

                    </div>
                )
            case "Salmonella":
                return(
                    <div>

                    </div>
                )

            default:{
                return(
                    <div>

                    </div>
                )
            }
        }
    }


    return(
        <div>
            {decisionTree(stateChoice, diseaseChoice)}
            <SDForm handleStateChange={handleStateChange} handleDiseaseChange={handleDiseaseChange}/>
        </div>
    )
}

export default KingCon