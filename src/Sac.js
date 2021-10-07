import React from 'react';
import { Grid, Row, Col } from 'rsuite';
 
function Sac() {
  return (
    <div className="page-container">
        <h2 className="page-header">Sacramento Things To Do</h2>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content page-content-image">
                        <img className="image page-image" alt="" src="./sac.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <div className="page-content">
                        <div className="page-content-text">
                            <p>As the capitol of California, Sacramento offers a diverse array of activities to try and food and drink to taste.</p>
                            <p>And apart from being fun in and of itself, Sacramento is uniquely situated such that in an hour and a half in ether direction one could be deep in the mountains at Lake Tahoe or on the beach in the Bay Area.</p>

                            <h4 className="sac-header">Nature and Hikes (this is just a small selection, we have a LONG list of places to see and hike, please reach out if you want more!)</h4>
                            <h5 className="sac-sub-header">Sacramento area</h5>
                            <ul>
                                <li>American River Parkway - beautiful 26 mile bike and pedestrian pathway that runs from Folsom to downtown Sacramento</li>
                                <li>Capitol Gardens - beautiful gardens surrounding the state capitol that are open for strolling</li>
                                <li>William Land Park - great park with the Zoo, a golf course, and lots of trails for running and biking</li>
                            </ul>
                            <h5 className="sac-sub-header">Auburn area (~50 minutes from downtown</h5>
                            <ul>
                                <li>Middle Fork American River Quarry Trail - 10.8 miles round trip - nice views of the river and fairly flat, great for a trail run!</li>
                                <li>Training Hill - 4.5 miles round trip - fairly challenging but beautiful</li>
                                <li>Salmon Falls Bridge - 2.5 miles round trip - Easy trail, great for a run</li>
                                <li>Lake Clementine Trail - 3.8 miles round trip - Easy with great river and lake views</li>
                            </ul>
                            <h5 className="sac-sub-header">Tahoe area (~1.5-2 hours from downtown - check restrictions due to fire)</h5>
                            <ul>
                                <li>Lake Tahoe itself!</li>
                                <li>Donner Tunnels Trail - 5.2 miles round trip - Easy to moderate with cool tunnels and great views of Donner Lake</li>
                                <li>Fallen Leaf Lake - 2.5 miles round trip - Easy and scenic</li>
                            </ul>

                            <h4 className="sac-header">Cideries/Breweries/Taprooms/Wine Bars (within Sacramento city limits unless noted)</h4>
                            <h5 className="sac-sub-header">Cider</h5>
                            <ul>
                                <li>Two Rivers Cider - 4311 Attawa Ave - <a href="https://www.tworiverscider.com/">link</a></li>
                                <li>Cider House - 1111 24th St - <a href="http://ciderhousesac.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Breweries</h5>
                            <ul>
                                <li>Fieldwork Brewing Company - 1805 Capitol Ave - <a href="https://fieldworkbrewing.com/sacramento/">link</a></li>
                                <li>Track 7 Brewing Company - 3747 W Pacific Ave - <a href="https://track7brewing.com/">link</a></li>
                                <li>New Helvetia Brewing Company - 1730 Broadway - <a href="https://www.newhelvetiabrew.com/">link</a></li>
                                <li>Alaro Craft Brewery - 2004 Capitol Ave - <a href="https://alarobrewing.com/">link</a></li>
                                <li>Urban Roots Brewery and Smokehouse - 1322 V St - <a href="https://www.urbanrootsbrewing.com/">link</a></li>
                                <li>Oak Park Brewing Company - 3514 Broadway - <a href="https://opbrewco.com/">link</a></li>
                                <li>At Ease Brewing Company - 1825 I St - <a href="https://www.ateasebrewing.com/">link</a></li>
                                <li>Big Stump Brewing Company - 1716 L St - <a href="https://www.bigstumpbrewco.com/">link</a></li>
                                <li>Jackrabbit Brewing - 1323 Terminal St, West Sacramento - <a href="https://www.jackrabbitbrewingcompany.com/">link</a></li>
                                <li>Drake's: The Barn - 985 Riverfront St, West Sacramento - <a href="https://drinkdrakes.com/places/the-barn/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Taprooms</h5>
                            <ul>
                                <li>Der Biergarten - 2332 K St - <a href="https://beergardensacramento.com/">link</a></li>
                                <li>LowBrau - 1050 20th St - <a href="http://www.lowbrausacramento.com/">link</a></li>
                                <li>Pangaea Bier Cafe - 2743 Franklin Blvd - <a href="https://www.pangaeabiercafe.com/">link</a></li> 
                                <li>Federalist Public House - 2009 Matsui Alley - <a href="https://federalistpublichouse.com/">link</a></li> 
                                <li>Hop Gardens - 2904 Franklin Blvd - <a href="http://thehopgardens.com/">link</a></li>
                                <li>SacYard Community Tap House - 1725 33rd St - <a href="https://sacyard.beer/">link</a></li>
                                <li>Leftys Taproom - 5610 Elvas Ave - <a href="https://www.leftystaproom.com/">link</a></li>
                                <li>Capital Hop Shop - 1431 I S - <a href="http://www.capitalhopshop.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Wine and Bars</h5>
                            <ul>
                                <li>58 Degrees and Holding Company - 1217 18th St - <a href="https://sacramento.downtowngrid.com/listings/58-degrees-holding-co-2">link</a></li>
                                <li>The Rind - 1801 L St #40 - <a href="http://therindsacramento.com/">link</a></li>
                                <li>Karma Brew - 1530 16th St - <a href="https://www.yelp.com/biz/karma-brew-sacramento">link</a></li>
                                <li>Old Sugar Mill - 35265 Willow Ave, Clarksburg - <a href="http://oldsugarmill.com/">link</a></li>
                            </ul>

                            <h4 className="sac-header">Restaurants (many of the aforementioned drinking establishments have kitchens or food trucks but here are some of our other favorites)</h4>
                            <h5 className="sac-sub-header">Brunch/Cafes</h5>
                            <ul>
                                <li>Café Dantorels - 2700 24th St - <a href="https://cafedantorels.com/">link</a></li>
                                <li>Tower Café - 1518 Broadway - <a href="https://towercafe.com/">link</a></li>
                                <li>Fox and Goose Public House - 1001 R St - <a href="https://foxandgoose.com/">link</a></li>
                                <li>Old Soul Co - 1716 L St and 3434 Broadway - <a href="https://oldsoulco.com/">link</a></li>
                                <li>Vibe Health Bar - 3515 Broadway - <a href="https://www.vibehealthbar.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Mediterranean</h5>
                            <ul>
                                <li>Petra Greek - 1122 16th St - <a href="https://petragreek.com/">link</a></li>
                                <li>Falafel Corner - 1004 J St - <a href="https://falafelcorner.us/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Thai</h5>
                            <ul>
                                <li>Noodles to Thai For - 2675 24th St - <a href="https://www.yelp.com/biz/noodles-to-thai-for-sacramento">link</a></li>
                                <li>The Coconut on T - 1110 T St - <a href="http://www.thecoconuttogo.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Chinese and Dim Sum</h5>
                            <ul>
                                <li>Ming Dynasty - 1211 Broadway - <a href="https://mingdynastysac.com/">link</a></li>
                                <li>Dumpling and Tea House - 3000 Freeport Blvd, Suite 4 - <a href="https://dumplingteahouse.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Japanese</h5>
                            <ul>
                                <li>Jensai Sushi - 2210 16th St - <a href="https://www.jensaisushi.com/">link</a></li>
                                <li>Ramen House Ryujin - 1831 S St - <a href="http://ryujinramen.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Mexican</h5>
                            <ul>
                                <li>Chita's Taqueria - 2019 Q St - <a href="http://chitasmexicangrill.com/">link</a></li>
                                <li>Chando's Tacos - 5644 J St - <a href="https://chandostacos.com/">link</a></li>
                            </ul>
                            <h5 className="sac-sub-header">Pizza</h5>
                            <ul>
                                <li>Uncle Vito's Slice of NY - 1501 16th St - <a href="http://unclevito.com/">link</a></li>
                                <li>Giovanni's Old World Pizzeria - 6200 Folsom Blvd - <a href="https://www.giovannisnypizzeria.com/">link</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}
 
export default Sac;