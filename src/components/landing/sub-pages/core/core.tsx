import React from 'react';

import { Layout } from "antd";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Core: React.FC = (props: ContainerProps) => {
  
  return (
    <Layout
      style={{
        display: 'flex',
        overflowX: 'hidden',
        width:  '100%',
        flexDirection: window.innerWidth < 500 ? 'column' : 'row',
        backgroundColor: 'transparent'
      }}
    >
  
      <div
        style={{
          display: 'flex',
          minHeight: '50vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}
      >
        <div
          style={{
            minHeight: '40vh',
            width: '70%',
            // backgroundColor: '#FFF',
            // border: '1px solid #707E91',
            borderRadius: 8,
            boxShadow: '-10px -10px 10px 0 #FFFFFF 70%'
          }}
        >
  
          <img
            style={{
              height: '50%',
              width: '100%',
            }}
            src={require('../../../../assets/findPeople.png')}
          />
  
          <h6
            style={{
              color: '#767676',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
            We've designed our Platform with the user in mind, which is why we've made it so easy to find professionals, and be found by service companies. ...
          </h6>
    
        </div>
  
      </div>
  
  
      <div
        style={{
          display: 'flex',
          minHeight: '50vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}
      >
        <div
          style={{
            minHeight: '40vh',
            width: '70%',
            // backgroundColor: '#707E91',
            // border: '1px solid #707E91',
            borderRadius: 8,
            boxShadow: '-10px -10px 10px 0 #FFFFFF 70%'
          }}
        >
  
          <img
            style={{
              height: '50%',
              width: '100%',
            }}
            src={require('../../../../assets/join.png')}
          />
  
          <h6
            style={{
              color: '#767676',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
            StartUp-People members are overwhelmingly satisfied with the benefits they receive – in fact, 95% say they recommend StartUp-People membership to colleagues. ...
          </h6>
    
        </div>
  
      </div>
  
      <div
        style={{
          display: 'flex',
          minHeight: '50vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}
      >
        <div
          style={{
            minHeight: '40vh',
            width: '70%',
            // backgroundColor: '#FFF',
            // border: '1px solid #707E91',
            borderRadius: 8,
            boxShadow: '-10px -10px 10px 0 #FFFFFF 70%'
          }}
        >
      
          <img
            style={{
              height: '50%',
              width: '100%',
            }}
            src={require('../../../../assets/service.png')}
          />
      
          <h6
            style={{
              color: window.innerWidth < 500 ? 'black' : '#767676',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
            We offer the full spectrum of services to help organizations work better. Everything from creating standards of excellence, assessing how you’re doing, and helping you perform even better in future. ...
          </h6>
    
        </div>
  
      </div>
    
    </Layout>
  )
}

const CoreView = Core

export default CoreView
