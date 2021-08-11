import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Registry() {
  return (
    <div className="page-container">
        <h2 className="page-header">Registry Options</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content page-content-image">
                        <img className="image page-image" alt="" src="./dot2.JPG" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content">
                        <div className="page-content-text">
                            <p>We will be happy just to see your smiling faces on our special day. And of course having lived together for over six years, we have accumulated a fair amount of household items.</p>
                            <p>However, we know that regardless you, our generous friends and family, are eager to gift something.</p>
                            <p>Therefore, we ask that if you are inclined to give please consider one of the following options.</p>
                            <p>First, since we would love to visit you all in the near future consider giving to our dogsitting fund. It's important to us that our three little creatures are in good hands while traveling.</p>
                            <p>Second, you can also make a donation to the shelter where we got Dot - Front Street Animal Shelter in Sacramento. Apart from being a no-kill shelter it's just a wonderful organization with wonderful people.</p>
                            <p>Feel free to give to either of these two funds <a href="https://www.zola.com/registry/lillybelleandmarc" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Registry;