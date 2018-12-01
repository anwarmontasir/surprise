import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surprise: false
        }
    }

    surprise() {
        this.setState({
            surprise: !this.state.surprise
        });
    }

    render() {
        if (this.state.surprise) {
            return <SurpriseImage onClick={e => this.surprise()} />;
        } else {
            return <SurpriseButton onClick={e => this.surprise()} />;
        }
    }
}