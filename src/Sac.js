import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Sac() {
  return (
    <div class="page-container">
        <h2 class="page-header">Sacramento Things To Do</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content page-content-image">
                        <img class="image page-image" alt="" src="./sac.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content">
                        <div class="page-content-text">
                            <p>As the capitol of California, Sacramento offers a diverse array of activities to try and food and drink to taste.</p>
                            <p>And apart from being fun in and of itself, Sacramento is uniquely situated such that in an hour and a half in ether direction one could be deep in the mountains at Lake Tahoe or on the beach in the Bay Area.</p>
                            <p>Suggestion for things to do to come in the future!</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Sac;