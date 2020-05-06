import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { CENSUS_ABI, CENSUS_ADDRESS } from './config'
import Census from './Census'
import { NavLink } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <p  style = {{marginTop: '1%'}} className="navbar-brand col-sm-3 col-md-2 mr-0" href=" " target="_blank">
          <NavLink style = {{color: 'white'}} to = "/" className = "nav-link">
              Office of the Registrar & Census | Govt of Dapps
          </NavLink>
            
            </p>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container" style = {{marginTop: '10%'}}>
        <marquee className="card-title" width="100%" direction="left" height="75px"> Notice :   Census Circular No. 1 : Planning for the 2021 Census - Jurisdictional changes and list of districts, tehsil/ talukas/ police stations, C.D. Blocks, Villages and town-compilation </marquee>
        <div className="card-deck" >
            <div className="card border-info mb-3">
            <div className="card-body">
            <h5 className="card-title">+ Add Individual</h5>
            <p className="card-text">
               Notice : Keep all KYC documents handy. can be used by all Districts, tehsil/ talukas/ police stations, C.D. Blocks, Villages and town-compilat
            </p>
            
            <p className="card-text"><small className="text-muted"><NavLink to = "/add">Click here </NavLink> </small></p>
            </div>
            </div>
            <div className="card border-info mb-3">
            <div className="card-body">
            <h5 className="card-title">Search by Constituency </h5>
            <p className="card-text">
                This Search functionallity will fetch data depending on Constituency. Constituency code are of four Alphabhet
            </p>
            <p className="card-text"><small className="text-muted"><NavLink to = "/viewbyphn" >Click here </NavLink> </small></p>
            </div>
            </div>
            <div className="card border-info mb-3">
            <div className="card-body">
            <h5 className="card-title">Search by Phone Number </h5>
            <p className="card-text">
            This Search functionallity will fetch data depending on Phone Number used during Regsistering .
            </p>
            <p className="card-text"><small className="text-muted"><NavLink to = "/viewbyphn">Click here </NavLink> </small></p>
            </div>
            </div>
            <div className="card border-info mb-3">
            <div className="card-body">
            <h5 className="card-title">View All</h5>
            <p className="card-text">
                Notice : Avoid using this functionallity.This Search functionallity will fetch all Census Data    
            </p>
            <p className="card-text"><small className="text-muted"><NavLink to = "/viewall">Click here </NavLink> </small></p>
            </div>
            </div>
     </div>
    </div>
   
    </div>
    );
  }
}

export default Home;
