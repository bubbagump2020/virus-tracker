import React from 'react'
import { FormRadio } from 'shards-react'

const StateSelect = (props) => {

    const stateArray = props.allStates

    const showStateOptions = () => {
        return stateArray.map(state => {
            return(
                <div key={state.name}>
                    <FormRadio
                        inline
                        name="state"
                        checked={props.selectedState.name === state.name}
                        onChange={() => props.onChange(state.name)}
                    >
                        {state.name}
                    </FormRadio>
                </div>
            )
        })
    }

    return(
        <div>
            {showStateOptions()}
        </div>
    )
}

export default StateSelect;

// att in plano, texas 2 - 3 year contract, amdox for att w2 salaried employee of agreeya solutions 