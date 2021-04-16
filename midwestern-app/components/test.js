import React, { Component } from 'react';
import Lists from '../lists.json'

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      finalArray: []
    };
    this.combineLists = this.combineLists.bind(this);
  }
  combineLists() {
    if(this.state.finalArray.length > 0){
      alert("You've already calculated the final list!")
    }
    const combined = [...Lists[0], ...Lists[1]]
    this.setState({finalArray: [...new Set(combined)]})
  }
  render() {
    return (
    <section className="test">
      <div className="container">
        <h1>Heading One</h1>
        <p>Remove the duplicates in 2 javascript objects and output the list of distinct names in an aunordered list when this <a className="inline-link" onClick={this.combineLists}>link is clicked</a>. If the operation has been completed already notify the user that this has already been done.</p>
        <div className="list__wrapper">
          {Lists.map((list, index) =>
            <div key={index} className="list">
              <h3>List # {(index + 1)}</h3>
              <ul key={index} className="objects__wrapper">
                {list.map((item, index) => ( 
                  <li className="object" key={index}>
                    {item}
                  </li>
                ) )}
              </ul>
          </div>
          )}
          {this.state.finalArray.length > 0 &&
            <div className="list list--final">
              <h3>Final List</h3>
              <ul>
                {this.state.finalArray.map((item, index) => ( 
                  <li className="object" key={index}>
                    {item}
                  </li>
                ) )}
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
    )
  }
}
export default Test;