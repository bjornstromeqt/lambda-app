import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import './style.css';

class CompanyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: queryString.parse(this.props.location.search)
        }
    }

    render() {

        return (
            <div className="company-container">
                <h1>Company</h1>
                <p>{JSON.stringify(this.state.params)}</p>
            </div>
        )
    }
}

CompanyContainer.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

export default withRouter(CompanyContainer);

