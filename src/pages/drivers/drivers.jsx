import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function Drivers() {

  const [drivers, setDrivers] = useState([])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/drivers")
    .then((res)=>{
      // if(res.status == 201){
      //   setDrivers(res.data)
      // }
      setDrivers(res.data)
    })
    .catch(e=>console.log(e))
  }, [])

  return (
    <div className='container' style={{height:"100%"}}>
      <h3 >Drivers</h3>

      <Table>
            <thead>
                <tr>
                <th>
                    Name
                </th>
                <th>
                    contact
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    drivers.map((d)=>{
                        return(
                        <tr>
                            <td>{d.name}</td>
                            <td>{d.phone_number}</td>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default Drivers