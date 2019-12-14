import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_task } from '../Action/Action_task'

class Inputnav extends Component {
    state = {
        input: ""
    };
    onchangeHandler = e => {
        this.setState({ input: e.target.value })
    };
    add = e => {
        e.preventDefault();
        this.props.add_task({
            text: this.state.input,
            key: Date.now(),
            checked: false,
            edit: false
        });
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center container w-25 p-3  ">
                    <input type="text" class="form-control " value={this.state.input}
                        onChange={this.onchangeHandler}
                        placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.add}>Button</button>
                    </div>
                </div>
            </div >


        )
    }
};
const mapDispatchToProps = {
    add_task
};
export default connect(null, mapDispatchToProps)(Inputnav)