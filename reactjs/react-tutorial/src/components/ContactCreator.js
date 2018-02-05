class ContactCreator extends React.Component{
  render(){
    return (
      <div>
          <p>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="phone" placeholder="phone"/>
            <button>
              Insert
          </button>
          </p>
      </div>
    );
  }
}
