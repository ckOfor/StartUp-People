import React from 'react';

import { Layout } from "antd";

import HeaderView from "../../common/header/header";

import backgroundImage from '../../assets/bkImg.png';

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const ProfessionalSignUp: React.FC = (props: ContainerProps) => {
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
  
    </Layout>
  )
}

const ProfessionalSignUpView = ProfessionalSignUp

export default ProfessionalSignUpView
