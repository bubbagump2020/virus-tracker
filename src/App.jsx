import React from 'react';

import mumpsData from './components/data/mumps'
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { testData: [] }
  }

  async componentDidMount(){
    this.setState({
      testData: await mumpsData()
    })
  }

  render(){
    
    return(
      <div>
          {console.log(this.state.testData)}
      </div>
    )
  }

}

export default App;
