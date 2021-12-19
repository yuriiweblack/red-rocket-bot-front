import React, {Component} from 'react';
import { Button } from '@material-ui/core';

export default class EventsEdits extends Component {
    constructor(props) {
        super(props);


        this.state = {
            visibility: false,
            input: "",
            submit: "",
            items: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    handleInput(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render() {
        return (
            <div>
                <center>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleInput} />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>
                    <ul>
                        {this.state.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                {/*<h3>{this.state.submit}</h3>*/}
                </center>
            </div>
        );
    }
};

// const Transfer = () => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path='/events/events-edit/' component={EventsEdit}/>
//             </Switch>
//         </BrowserRouter>
//     )
// }
//
// export default Transfer;