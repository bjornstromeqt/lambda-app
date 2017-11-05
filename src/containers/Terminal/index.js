import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './style.css';

class TerminalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            commands: []
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value;

        this.setState({input});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const command = this.state.input;
        this.props.history.push(`?${command}`);

        const commands = [...this.state.commands, command];
        this.setState({commands, input: ''});
    };

    getLatestCommands(n = 5) {
        const totalCommands = this.state.commands.length;
        return this.state.commands.slice(totalCommands - n);
    }

    render() {
        const commands = this.getLatestCommands();

        return (
            <div id="terminal">
                <div className="terminal-container">
                    {commands.map((item, index) => (
                        <div className="terminal-row" key={index}>
                            <input className="terminal-input" value={item} readOnly/>
                        </div>
                    ))}

                    <form onSubmit={this.handleSubmit}>
                        <div className="terminal-row active">
                            <input className="terminal-input" onChange={this.handleChange} value={this.state.input}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

TerminalContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

export default withRouter(TerminalContainer);

