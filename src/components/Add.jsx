import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const[data,changedata]=useState(
        {
            "state":"",
            "rural hospital":"",
            "rural bed":"",
            "urban hospital":"",
            "urban bed":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value},[])
    }
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">state</label>
                            <input type="text" className="form-control" name= "state" value={data.state} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">rural hospital</label>
                            <input type="text" className="form-control" name= "rural hospital" value={data['rural hospital']} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">urban hospital</label>
                            <input type="text" className="form-control" name=  "rural bed" value={data['rural bed']} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">rural beds</label>
                            <input type="text" className="form-control" name="urban hospital" value={data['urban hospital']} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">urban beds</label>
                            <input type="text" className="form-control" name= "urban bed" value={data['urban bed']} onChange={inputHandler} />
                        </div>

                    </div><br />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readvalue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add