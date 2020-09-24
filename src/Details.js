import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Details() {
  return (
    <div class="page-container">
        <h2 class="page-header">Important Info</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content page-content-image">
                        <img class="image page-image" alt="" src="./details.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content">
                        <div class="page-content-text">
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