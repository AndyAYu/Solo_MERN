//create card component
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

//create flippable card component
const FlippableCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" alt="Card image cap" />
                <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default FlippableCard;