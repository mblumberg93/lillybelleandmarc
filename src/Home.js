import React, { useEffect } from 'react';
import { Notification } from 'rsuite';
 
function Home() {

  useEffect(() => {
    Notification.open({
      title: 'Updates!',
      duration: 0,
      description: <><p>First, we have recently added information on additional events for all wedding guests  on Thursday and Friday. Please see the Event Details page for more info.</p><p>Second, we have just added a Registry page for those who are interested in that.</p></>
    });
  });


  return (
    <div className="page-container">
      <div className="main-info">
          <img className="image main-info-image" alt="" src="./home.jpg" />
          <div className="main-info-title">The Wedding Of</div>
          <div className="main-info-title">LillyBelle Deer and Marc Blumberg</div>
          <div className="main-info-sub-title">October 16, 2021 at 6pm</div>
          <div className="main-info-sub-title">Heringer Estates - Clarksburg, CA</div>
      </div>
    </div>
  );
}
 
export default Home;