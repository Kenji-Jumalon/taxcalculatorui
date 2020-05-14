import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import "./TaxCalculator.css"
import UserInputForm from "./UserInputForm";
import TaxResults from "./TaxResults";

class TaxCalculator extends Component {
    render() {
        return(
            <div id={"wrapper"}>
                <div>
                    <h1>Tax Calculator</h1>
                    <p>Use our simple calculator to quickly estimate your 2020 federal and provincial taxes.</p>
                </div>
                <Row>
                    <Col xs={6}><UserInputForm/></Col>
                    <Col xs={6}><TaxResults /></Col>
                </Row>
            </div>
        );
    }

}
export default TaxCalculator