// componentDidMount() {
//   let query = `{
//     unwalkedPaths {
//       endLat
//       endLon
//       startLat
//       startLon
//     }
//   }`
//   let body = {
//     operationName: null,
//     query: query,
//     variables: {}
//   }
//   fetch("https://osm-routing-api.now.sh/", 
//     {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type' : 'application/json',
//         'Accept' : 'application/json',
//       }
//     })
//     .then(data => this.setState({data}))
//     .catch(err => console.error(err))
// }