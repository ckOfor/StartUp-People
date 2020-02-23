import React from 'react';

import {Layout, Button, Menu} from "antd";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Team: React.FC = (props: ContainerProps) => {
  
  return (
    <Layout
      style={{
        overflowX: 'hidden',
        width:  '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }}
    >
      
      <div
        className="adminSignInPageApp"
        style={{
          display: 'flex',
          minHeight: '70vh',
          width: window.innerWidth < 500 ? '100%' : '60%',
          justifyContent: 'center',
        }}
      >
        
        <div
          style={{
            marginTop: '10%',
            marginLeft: window.innerWidth < 500 ? '5%' : '15%'
          }}
        >
          <h1
            style={{
              color: window.innerWidth < 500 ? 'black' : '#433a59',
              fontFamily: 'Rockwell',
              fontSize: 28,
              width: '85%',
            }}
          >
            Our Team
            
            <h6
              style={{
                color: window.innerWidth < 500 ? 'black' :  '#767676',
                fontFamily: 'Rockwell',
                marginTop: '5%'
              }}
            >
              People with an astonishing diversity of skills, experiences and personalities bring their unique talents to StartUp-People every day. With our eclectic, collaborative approach to development and employment, we work together to help businesses transform, succeed and evolve.
            </h6>
            
          </h1>
          
          {
            window.innerWidth < 500 && (
              <Button
                onClick={()=> window.open("mailto:hello@startup-people.com?subject=I have attached my  CV!", "_blank")}
                style={{
                  color: '#fff',
                  width: 120,
                  height: 50,
                  backgroundColor: '#F06827',
                  borderRadius: 8,
                  fontFamily: 'Rockwell',
                }}
              >
                Careers
              </Button>
            )
          }
        
        
        </div>
      
      </div>
      
      <div
        style={{
          minHeight: '70vh',
          margin: "auto",
          width: window.innerWidth < 500 ? '0%' : '40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent'
        }}
      >
        <img
          style={{
            height: '50%',
            width: '80%',
            marginTop: 40
          }}
          src={require('../../../../assets/team.png')}
        />
      </div>
    
    </Layout>
  )
}

const TeamView = Team

export default TeamView
