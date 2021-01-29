import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Covid() {
  return (
    <div className="page-container">
        <h2 className="page-header">COVID-19 Precautions</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content page-content-image">
                        <img className="image page-image" alt="" src="./covid.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content">
                        <div className="page-content-text">
                            <p>Below is a message from Marc and LillyBelle regarding safety precautions and COVID-19.</p>
                            <p>"As you all know we are in the midst of an unprecedented global pandemic and we'd like to take a moment to thank all our healthcare workers and others on the front lines."</p>
                            <p>"We want to assure all our guests that our wedding takes a back seat to the health and safety of our friends and family."</p>
                            <p>"As a precaution, we have postponed the wedding from the original date of May 22, 2021, to October 16, 2021."</p>
                            <p>"We hope by that time a vaccine will be widely available worldwide and that all our guest will have gotten the recommended dosage."</p>
                            <p>"We are monitoring the situation and will update everyone if things change."</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Covid;