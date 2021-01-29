import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Venue() {
    return (
        <div className="page-container">
            <h2 className="page-header">Heringer Estates</h2>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={12}>
                        <div className="page-content page-content-image">
                            <img className="image page-image" alt="" src="./venue.jpg" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <div className="page-content">
                            <div className="page-content-text">
                                <p>For LillyBelle's 24th birthday, LillyBelle and Marc decided to explore Sacramento's own under-appreciated wine region - Clarksburg.</p>
                                <p>Stumbling upon Heringer Estates among collection of wineries in a renovated Old Sugar Mill, they were impressed with not only the approachability of their wines, but also the warmth of the winemakers - so much so that they became wine club members on the spot!</p>
                                <p>Fast forward and Heringer is now based in a delightfully welcoming rustic barn located between the vines in Clarksburg's delta-based wine country.</p>
                                <p>Not only is Heringer Barn perfectly picturesque and characteristic of the area LillyBelle and Marc have lived for the past few years, but it's conveniently located less than half an hour south of Downtown Sacramento.</p>
                                <p>For the reasons above and so many more, LillyBelle and Marc are incredibly excited to share their special day with you at Heringer!</p>
                                <p>You can read more about Heringer <a href="https://heringerestates.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Venue;