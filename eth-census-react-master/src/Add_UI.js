import React, { Component } from 'react'

class Add_UI extends Component {

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createCensus(this.task.value)
        }}>
          <input
            id="name"
            ref={(input) => {
              this.task = input
            }}
            type="text"
            className="form-control"
            placeholder="Add name..."
            required />
            <br/>
            <input
            id="address"
            ref={(input) => {
              this.task = input
            }}
            type="text"
            className="form-control"
            placeholder="Add address..."
            required />
            <br/>

            <input
            id="phoneNumber"
            ref={(input) => {
              this.task = input
            }}
            type="text"
            className="form-control"
            placeholder="Add phone number..."
            required />
            <br/>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
               
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">North</option>
                <option value="2">South</option>
                <option value="3">Center</option>
                <option value="4">West</option>
                <option value="5">East</option>
              </select>
            </div>            

            <button type="submit" class="btn btn-info"   > Add</button>
        </form>        

      </div>
    );
  }
}

export default Add_UI;
