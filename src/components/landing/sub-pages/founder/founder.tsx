import React from 'react';

import { Layout } from "antd";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Founder: React.FC = (props: ContainerProps) => {
  
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
            src={require('../../../../assets/olive.png')}
          />
          
          <h1
            style={{
              color: '#433a59',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
            C.O.O - Chief Operations Officer
  
            <h6
              style={{
                color: '#767676',
                fontFamily: 'Rockwell',
              }}
            >
              - Olive O.
            </h6>
          </h1>
        
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
            src={require('../../../../assets/ada.png')}
          />
          
          <h1
            style={{
              color: '#433a59',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
            C.O.O - Chief Executive Officer
            
            <h6
              style={{
                color: '#767676',
                fontFamily: 'Rockwell',
              }}
            >
              - Ada O.
            </h6>
          </h1>
        
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
            src={require('../../../../assets/chinedu.png')}
          />
          
          <h1
            style={{
              color: '#433a59',
              fontFamily: 'Rockwell',
              marginTop: '10%',
              width: '100%',
            }}
          >
  
            C.O.O - Chief Technical Officer
  
            <h6
              style={{
                color: '#767676',
                fontFamily: 'Rockwell',
              }}
            >
              - Chinedu O.
            </h6>
            
          </h1>
        
        </div>
      
      </div>
    
    </Layout>
  )
}

const founderView = Founder

export default founderView
