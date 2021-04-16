import React, { Component, MouseEvent } from 'react';
import { IProps, IState } from './interface';

class Test extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props);
    this.state = {
      lists: [],
      finalArray: []
    };
    this.combineLists = this.combineLists.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const res = await fetch('http://localhost:3000/lists.json');
    const lists: Array<Array<string>> = await res.json();

    this.setState({lists: lists});
  }

  componentDidMount() {
    this.getData();
  }
 
  combineLists(event: MouseEvent) {
    event.preventDefault();
    
    if (this.state.finalArray.length > 0){
      alert("You've already calculated the final list!")
    }
    const combinedSet = new Set([...this.state.lists[0], ...this.state.lists[1]]);
    
    const combined = Array.from(combinedSet);
    this.setState({
      finalArray: combined
    });
  }
  render() {
    return (
    <section className="test">
      <div className="container">
        <h1>Heading One</h1>
        <p>Remove the duplicates in 2 javascript objects and output the list of distinct names in an aunordered list when this 
          <a className="inline-link" 
            onClick={this.combineLists}
          >
              link is clicked
          </a>. If the operation has been completed already notify the user that this has already been done.</p>
        <div className="list__wrapper">
          {this.state.lists.map((list, index) =>
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