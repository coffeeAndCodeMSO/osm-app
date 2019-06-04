import React, { Component } from 'react';
import styled from 'styled-components';
import MapBox from './components/MapBox';

class App extends Component {
  state = {
    data : []
  }
  componentDidMount() {
    let query = `{
      unwalkedPaths {
        endLat
        endLon
        startLat
        startLon
      }
    }`
    let body = {
      operationName: null,
      query: query,
      variables: {}
    }
    fetch("https://osm-routing-api.now.sh/", 
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <FlexBoxCenter>
        <Div50> 
          <FlexBoxCenter>
            <TitleBox height={50}  >
              <FlexBoxCenter>
                <h3>Check out this map</h3>
              </FlexBoxCenter>
            </TitleBox>
          </FlexBoxCenter>
        </Div50> 
        <MapBox/>
      </FlexBoxCenter>
    );
  }
}

const TitleBox = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  background-color: lightgray;
  padding-bottom: 50px;
`

const Div50 = styled.div`
  width: 50vw;
  height: 100vh;
`;

const FlexBoxCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
