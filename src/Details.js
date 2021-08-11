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
                            <div className="details-section">
                                <h3>Date, Time, and Location</h3>
                                <p>Saturday, October 16th, 2021 - 6pm to 10:30pm</p>
                                <p>Heringer Estates (<a target="_blank" rel="noopener noreferrer" href="https://g.page/heringerestates?share">37375 Netherlands Rd, Clarksburg, CA 95612</a>)</p>
                            </div>
                            <div className="details-section"> 
                                <h3>Hotel and Transportation</h3>
                                <p>We recommend staying at the Embassy Suites Sacramento River Promenade (<a target="_blank" rel="noopener noreferrer" href="https://g.page/Embassy-Suites-Sacramento?share">100 Capitol Mall, Sacramento, CA 95814</a>). If not staying at the Embassy Suites - any hotel, bed and breakfast, Airbnb, etc. within the Downtown or Midtown Sacramento area will work well.</p>
                                <p>Transportation will be provided in the form of two 50+ person charter buses. The busses will depart for the venue from outside the Embassy Suites at 5:15pm. The busses will return to the Embassy Suites on a staggered timeline - the first departs at 9pm and the second departs at 10:30pm.</p>
                            </div>
                            <div className="details-section">
                                <h3>Attire</h3>
                                <p>We would prefer guests attend in Cocktail Attire (<a target="_blank" rel="noopener noreferrer" href="https://www.brides.com/cocktail-attire-wedding-4844364">examples here</a>).</p>
                            </div>
                            <div className="details-section">
                                <h3>Food and Drink</h3>
                                <p>Dinner will be provided by GyroStop, a Sacramento area Mediterranean fusion food truck. There will be vegan options. The selections will include gyro, chicken, falafel, rice, salad, dolmas, and fries.</p>
                                <p>Wine will be provided by Heringer Estates and the offerings will be hand-picked by LillyBelle and Marc. Beer and non-alcoholic beverages will be provided as well.</p>
                            </div>
                            <div className="details-section">
                                <h3>Other Events</h3>
                                <p>For those that are arriving early there are two other organized events for all wedding guests.</p>
                                <p><b>Thursday Evening</b></p>
                                <p>There will be an informal dinner Thursday evening in Sacramento at local favorite Oak Park Brewing in Sacramento from 6:30pm to 8:30pm. As we said, it will be simply a casual get together for friends and family to enjoy catching up over a pint, but feel free to reach out to LillyBelle and/or Marc if you have questions.</p>
                                <p><b>Friday Daytime</b></p>
                                <p>Friday we will be having a picnic lunch in one of Sacramento's picturesque riverside parks. Details are still being finalized, but we are tentatively planning on having a picnic at Ancil Hoffman Park on the American River Parkway from Noon to 3pm. Stay tuned for more info.</p>
                                <p>Family members and members of the wedding party will have additional wedding-related events Friday evening. Contact LillyBelle and/or Marc if you have questions.</p>
                                <p>We highly encourage you to reach out and connect with other attendees outside of the scheduled wedding events, be it family or old friends!</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Details;