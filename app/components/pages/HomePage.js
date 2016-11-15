import React from 'react';
import Banner from 'components/home/Banner';

function HomePage() {
  return (
    <div className="l-page">
      <Banner />
      <div className="l-content row">
        <div className="column small-12 medium-6 medium-offset-3">
          <p>The tool makes it easy to obtain information on the sites critical for waterbird species by accessing several independent databases and analysing information at the biogeographical population level, so providing a comprehensive basis for management and decision making. It is designed to help a range of different users from site managers to national authorities and international organisations. The CSN Tool, one of the major achievements of the Wings Over Wetlands (WOW) project, is also an important example of the added value of cooperation between likeminded conservation organisations, international conventions and agreements, governments, UN agencies and other donors.</p>

          <p>The CSN Tool supports both AEWA and the Ramsar Convention on Wetlands. It is also relevant to the EU Birds Directive and the Bern Convention’s Emerald Network.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;