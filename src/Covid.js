import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Covid() {
  return (
    <div class="page-container">
        <h2 class="page-header">COVID-19 Precautions</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content page-content-image">
                        <img class="image page-image" alt="" src="./covid.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content">
                        <div class="page-content-text">
                            <p>Below is a message from Marc and LillyBelle regarding safety precautions and COVID-19.</p>
                            <p>"As you all know we are in the midst of an unprecedented worldwide pandemic and we'd like to take a moment to thank all our healthcare workers and others on the front lines."</p>
                            <p>"We want to assure all our guests that our wedding takes a back seat to the health and safety of our friends and family."</p>
                            <p>"At this time we are hoping for the availability of a reliable vaccine by May 2021 and would ask that if it does become available that all our guests take it."</p>
                            <p>"However, we accept that these things are entirely out of our of control and therefore would like to stress that there is a real possibility we will have to postpone our wedding."</p>
                            <p>"We are monitoring the situation and will notify everyone no later than March 1st, 2021, whether a postponement is to happen."</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Covid;