import React from "react";
import '../css/addevent.css';


class AddEvent extends React.Component {
  
   
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
          datetime: '',
          category: '',
          link: '',

        };
  
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleLinkChange = this.handleLinkChange.bind(this);
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

    handleDateTimeChange(event) {
      console.log('DateTime was changed', event.target.value);
      this.setState({datetime: event.target.value})
    }

    handleCategoryChange(event) {
      console.log('Category was changed', event.target.value);
      this.setState({category: event.target.value})
    }

    handleLinkChange(event) {
      console.log('Link was changed', event.target.value);
      this.setState({link: event.target.value})
    }
  
    render() {
      return (
        <div className="container1">
          <h1 className="title">Post Event!</h1>
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
                placeholder="Date/Time"
                value={this.state.datetime}
                onChange={this.handleDateTimeChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Categoty"
                value={this.state.category}
                onChange={this.handleCategoryChange}
            />
            <br/><br/>
            <input
                type="text"
                placeholder="Link"
                value={this.state.link}
                onChange={this.handleLinkChange}
            />
            <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default AddEvent;


//   class Addevent extends React.Component {
   
   
   
   
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   export default Addevent;