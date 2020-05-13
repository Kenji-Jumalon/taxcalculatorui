import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import "./TaxCalculator.css"

class TaxResults extends Component{
    render(){
        return(
            <div className={"taxcalculator"}>
                <form>
                    <Container>
                        <Row>
                            <Col xs={6} id={"results"}>
                                <h4>Results</h4>
                                <div>
                                    <label>Total income</label>
                                    <span>$ 0</span>
                                </div>
                                <div>
                                    <label>Federal tax</label>
                                    <span>$ 0</span>
                                </div>
                                <div>
                                    <label>Provincial tax</label>
                                    <span>$ 0</span>
                                </div>
                                <div>
                                    <label>Total tax</label>
                                    <span>$ 0</span>
                                </div>
                                <div>
                                    <label>After-tax income</label>
                                    <span>$ 0</span>
                                </div>
                                <div>
                                    <label>Average tax rate</label>
                                    <span>0.00 %</span>
                                </div>
                                <div>
                                    <label>Marginal tax rate</label>
                                    <span>0.00 %</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        );
    }
}
export default TaxResults