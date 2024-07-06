import { api } from "./Api";
import { Status } from "./interface/Status";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

function App() {
  const [points, setPoints] = useState<Status[]>([]);

  useEffect(() => {
    axios.get(api)
      .then((resp: AxiosResponse<Status[]>) => setPoints(resp.data))
      .catch(err => console.error(err));
  }, []);

  function TableShow(){
    let arr = [...points];
    
    // Sorting of array based on NRR
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[i].NRR<arr[j].NRR){
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    let mappedArr = arr.map(item=>{
      return(
        <tr>
          <td>{item.No}</td>
          <td>{item.Team}</td>
          <td>{item.Matches}</td>
          <td>{item.Won}</td>
          <td>{item.Lost}</td>
          <td>{item.Tied}</td>
          <td>{item.NRR}</td>
          <td>{item.Points}</td>
        </tr>
      )
    });

    return(
      <tbody>
        {mappedArr}
      </tbody>
    )
  }

  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Teams</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>Nrr</th>
            <th>Point</th>
          </tr>
        </thead>
        <TableShow />
      </table>
    </div>
  )
}

export default App;