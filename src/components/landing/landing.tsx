import React from 'react';

import { Layout } from "antd";

import HeaderView from "../../common/header/header";

import backgroundImage from '../../assets/bkImg.png';
import MissionView from "./sub-pages/mission/mission";
import CoreView from "./sub-pages/core/core";
import TeamView from "./sub-pages/team/team";
import ContactView from "./sub-pages/contact/contact";
import FounderView from "./sub-pages/founder/founder";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Landing: React.FC = (props: ContainerProps) => {
  const imageUrl = backgroundImage;
  
  return (
    <Layout
      style={{
        overflowX: 'hidden',
        minHeight: '400vh',
        backgroundImage: `url(${imageUrl})`,
        width:  '100%',
        borderRadius: 12,
        display: 'flex',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
  
      <HeaderView />
      
      <div>
        <MissionView />
      </div>
  
      <div>
        <CoreView />
      </div>
  
      <div>
        <TeamView />
      </div>
  
      <div>
        <FounderView />
      </div>
  
      <div>
        <ContactView />
      </div>
      
    </Layout>
  )
}

const LandingView = Landing

export default LandingView
