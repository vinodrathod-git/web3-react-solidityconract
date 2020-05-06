import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { CENSUS_ABI, CENSUS_ADDRESS } from './config'
import AddUI from './Add_UI'
import { NavLink } from 'react-router-dom';

class Add extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545")
    const accounts = await web3.eth.getAccounts()

    console.log('accountd -- > ',accounts[0])
    this.setState({ account: accounts[0] })
    const census = new web3.eth.Contract(CENSUS_ABI, CENSUS_ADDRESS)

    console.log('CENSUS_ADDRESS -- > ',CENSUS_ADDRESS)
    this.setState({ census })
    const height = await census.methods.height().call()
    console.log('height -- > ',height)
     this.setState({ loading: false })
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      loading: true
    }

    this.createCensus = this.createCensus.bind(this)    
  }

 async createCensus() {
  
    let _name = document.getElementById('name').value;
    let _address = document.getElementById('address').value;
    let _phoneNumber = document.getElementById('phoneNumber').value;

    this.setState({ loading: true })
    const uniqueValue = await this.state.census.methods.addBlock(_name,_address,_phoneNumber).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
      console.log('uniqueValue -- > ',uniqueValue);
  }

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
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <AddUI                
                  createCensus={this.createCensus}                
                 />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
