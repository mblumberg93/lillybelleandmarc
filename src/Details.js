import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Details() {
  return (
    <div className="page-container">
        <h2 className="page-header">Important Info</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content page-content-image">
                        <img className="image page-image" alt="" src="./details.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content">
                        <div className="page-content-text">
                            <p>This is the place to find all important information about the wedding day including the ceremony, food, and transportation.</p>
                            <p>Information will be updated when it becomes available.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Details;