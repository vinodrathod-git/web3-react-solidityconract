import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { CENSUS_ABI, CENSUS_ADDRESS } from './config'
import Census from './Census'

class App extends Component {
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
      loading: true,
      tasks:[]
    }

    this.createCensus = this.createCensus.bind(this)
    this.getAllCensus = this.getAllCensus.bind(this)
    this.getCensusByPhoneNumber = this.getCensusByPhoneNumber.bind(this)
    //
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


    async getAllCensus() {

      debugger;
      this.setState({ loading: true })
      const blockDetails = await this.state.census.methods.getAllBlockDetails().call()
      console.log('blockDetails -- > ',blockDetails);
      for (var i = 0; i <= blockDetails.length; i++) {
        //const task = await todoList.methods.tasks(i).call()
        this.setState({
          tasks: [...this.state.tasks, blockDetails[i]]
        })
      }
      this.setState({ loading: false })

    }

    async getCensusByPhoneNumber(phoneNumber) {

      debugger;
      console.log('phoneNumber ',phoneNumber)
        this.setState({ loading: true })
        const blockDetails = await this.state.census.methods.getAllBlockDetails().call()
  
       console.log('blockDetails -- > ',blockDetails);
       this.setState({ tasks: blockDetails })
       for (let i = 0; i < blockDetails.length; i++) {
        if (blockDetails[i].phoneNumber === phoneNumber) {
              console.log('block details for phoneNumber ' + blockDetails[i]);
          break;
        }
      }
       this.setState({ loading: false })  
      }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <p className="navbar-brand col-sm-3 col-md-2 mr-0" href="/" target="_blank">Office of the Registrar & Census | Govt of Dapps</p>
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
                : <Census
                  getCensusByPhoneNumber={this.getCensusByPhoneNumber}
                  createCensus={this.createCensus}
                  getAllCensus={this.getAllCensus} />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
