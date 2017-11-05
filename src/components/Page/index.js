import React from 'react';


class Page extends React.Component {

    render() {
        return (
            <div id="page">
                {this.props.children}
            </div>
        )
    }
}

export default Page;
