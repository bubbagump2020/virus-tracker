import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import states from '../data/states'
import diseases from '../data/diseases'

const SDForm = (props) => {

    const stateChoice = () => {
        return states.map(state => {
            return(
                <option key={state}>{state}</option>
            )
        })
    }

    const diseaseChoice = () => {
        return diseases.map(disease => {
            return(
                <option key={disease}>{disease}</option>
            )
        })
    }


    return(
        <Container>
            <Form>
                <div>
                    <Form.Label>Choose Disease</Form.Label>
                    <Form.Control as='select' onChange={props.handleDiseaseChange}>
                        <option></option>
                        {diseaseChoice()}
                    </Form.Control>
                </div><br></br>
                <div>
                    <Form.Label>Choose State</Form.Label>
                    <p>Under Construction</p>
                    <Form.Control disabled as='select' onChange={props.handleStateChange}>
                        {/* <option></option> */}
                        {stateChoice()}
                    </Form.Control>
                </div>
            </Form>
        </Container>
    )
}

export default SDForm