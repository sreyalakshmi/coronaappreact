import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changedata]=useState(
            {
              data:{regional:[]}  
            }
        
    )
    const fetchData=()=>{
        axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">state</th>
                                    <th scope="col">rural hospitals</th>
                                    <th scope="col">rural beds</th>
                                    <th scope="col">urban hospitals</th>
                                    <th scope="col">urban beds</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.regional.map(
                                    (value, index)=>{
                                        return <tr>
                                        <th scope="row">{value.state}</th>
                                        <td>{value.ruralHospitals}</td>
                                        <td>{value.ruralBeds}</td>
                                        <td>{value.urbanBeds}</td>
                                        <td>{value.urbanHospitals}</td>
                                        <td></td>
                                    </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View