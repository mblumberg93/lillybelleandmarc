import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Couple() {
  return (
    <div class="page-container">
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content page-content-image">
                        <img class="image page-image" alt="" src="./couple.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div class="page-content">
                        <div class="page-content-text">
                            <p>LillyBelle and Marc met at the beginning of their freshman year at Claremont McKenna College.</p>
                            <p>As NCAA swimmers, they initially bonded over their shared love of the sport and competitive drive.</p>
                            <p>Over their four years, they earned dozens of combined awards and honors - concluding with both being voted Most Inspirational by their teammates in their senior year.</p>
                            <p>However, their shared interested don't end with the pool.</p>
                            <p>When not working out, LillyBelle and Marc enjoy a myriad of other activities including camping, playing board games, and tasting craft beer.</p>
                            <p>Professionally is where their interests diverge - LillyBelle is finishing up her PhD in Developmental Psychology and Marc is a Software Engineer.</p>
                            <p>LillyBelle and Marc currently reside in Curtis Park, Sacramento, with their three dogs - Doug, Milo, and Dot.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Couple;