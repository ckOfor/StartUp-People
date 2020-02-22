import React from 'react';

import { Layout } from "antd";

import HeaderView from "../../common/header/header";

import backgroundImage from '../../assets/bkImg.png';
import MissionView from "./sub-pages/mission/mission";

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
    
    </Layout>
  )
}

const LandingView = Landing

export default LandingView
