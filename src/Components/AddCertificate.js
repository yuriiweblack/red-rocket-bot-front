import React from "react";
// import '../css/addevent.css';


class AddCertificate extends React.Component {
  
   
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
          owner: '',
          mentor: '',
          date: '',
        };
  
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleOwnerChange = this.handleOwnerChange.bind(this);
      this.handleMentorChange = this.handleMentorChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleSubmit(event) {
      event.preventDefault();
      console.log('Form is submited:', this.state);
      // console.log('Form is submited.Description is', this.state.description);
    }

    handleTitleChange(event) {
        console.log('Title was changed', event.target.value);
        this.setState({title: event.target.value})
    } 

    handleDescriptionChange(event) {
      console.log('Description was changed',event.target.value);
      this.setState({description: event.target.value})
    }

    handleOwnerChange(event) {
        console.log('Owner was changed', event.target.value);
        this.setState({owner: event.target.value})
      }

    handleMentorChange(event) {
      console.log('Mentor was changed', event.target.value);
      this.setState({mentor: event.target.value})
    }

    handleDateChange(event) {
        console.log('Date was changed', event.target.value);
        this.setState({date: event.target.value})
      }
  
    render() {
      return (
        <div className="container1">
          <h1 className="title">Add Certificate!</h1>
        <form className="form" onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleTitleChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Owner"
                value={this.state.owner}
                onChange={this.handleOwnerChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Mentor"
                value={this.state.mentor}
                onChange={this.handleMentorChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Date"
                value={this.state.date}
                onChange={this.handleDateChange}
            />
            <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default AddCertificate;