import React from 'react'
import { FormRadio } from 'shards-react'

const DiseaseSelect = (props) => {

    const diseaseArray = props.allDiseases

    const showDiseaseOptions = () => {
        return diseaseArray.map(disease => {
            return(
                <div key={disease.name}>
                    <FormRadio
                        inline
                        name="disease"
                        checked={props.selectedDisease.name == disease.name}
                        onChange={() => props.onChange(disease.name)}
                    >
                        {disease.name}
                    </FormRadio>
                </div>
            )
        })
    }

    return(
        <div>
            {showDiseaseOptions()}
        </div>
    )
}

export default DiseaseSelect;