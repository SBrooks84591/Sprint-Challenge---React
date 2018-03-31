import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CharCard.css';


class CharCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: {}
        }
    }


    componentDidMount() {
        fetch(this.props.species[0])
        .then(result => {
            return result.json();
        })
        .then(data => {
            this.setState({ species:data });
        })
    }


    render() {
    return (
        <div>
        <Card>
            <CardBody>
                <CardText>Species: {this.state.species.name}</CardText>
            </CardBody>
        </Card>
        </div>
    );
};
}

export default CharCard;