import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content'
import RandomNumber from './RandomNumber';

class App extends React.Component{
    render(){
      return (
        <Contacts/>
      );
    }
}

class Contacts extends React.Component{
//기본 state 추가
constructor(props){
  super(props);
  this.state = {
    contactData: [
      {name: "Abet", phone: "010-0000-0001"},
            {name: "Betty", phone: "010-0000-0002"},
            {name: "Charlie", phone: "010-0000-0003"},
            {name: "David", phone: "010-0000-0004"}
    ]
  };
}

    render(){
      return (
        <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact,i)=>{
                      return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                            key={i}
                      />);
                    })}
                </ul>
            </div>

      );
    }

}

class ContactInfo extends React.Component{
  render(){
    return(
      <h2>{this.props.name} {this.props.phone}</h2>
    );
  }
}


export default App;
