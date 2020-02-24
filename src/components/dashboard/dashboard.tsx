import React from 'react';

import { Form, Layout } from "antd";


import backgroundImage from '../../assets/bkImg.png';
import HeaderView from "../../common/header/header";

interface StateProps {
  isLoading: boolean
}

interface Props {
  form: any
}

type ContainerProps = Props & StateProps

// @ts-ignore
export const Dashboard: React.FC = (props: ContainerProps) => {
  
  const imageUrl = backgroundImage;
  const { isLoading } = props;
  
  return (
    <Layout
      style={{
        overflowX: 'hidden',
        minHeight: '100vh',
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

const DashboardView = Form.create()(Dashboard)

export default DashboardView
