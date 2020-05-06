import React, { Component } from 'react'

class Census extends Component {

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

          <input type="submit" hidden={false} />
        </form>

        <input id="submit" name="submit" type="submit" value="Submit" onClick = {this.props.getAllCensus} />
    <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.getCensusByPhoneNumber(this.seacrh.value)
        }}>
		      <input
            id="searchPhoneNumber"
            ref={(input) => {
              this.seacrh = input
            }}
            type="text"
            className="form-control"
            placeholder="Enter Phone Number..."
            required />
            <br/>           
          <input type="submit" />
        </form>
        </div>

        <ul id="taskList" className="list-unstyled">
          { this.props.tasks.map((task, key) => {
            return(
              <div className="taskTemplate" className="checkbox" key={key}>
                <label>
                  <input
                  type="checkbox"
                  name={task.id}
                  defaultChecked={task.completed}
                  ref={(input) => {
                    this.checkbox = input
                  }}
                  onClick={(event) => {
                    this.props.toggleCompleted(this.checkbox.name) }}/>
                  <span className="content">{task.content}</span>
                </label>
              </div>
            )
          })}
        </ul>
        <ul id="completedTaskList" className="list-unstyled">  
        </ul>
      </div>
    );
  }
}

export default Census;
