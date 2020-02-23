import React from 'react';

import {Layout, Button, Icon, Menu} from "antd";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Contact: React.FC = (props: ContainerProps) => {
  
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
          src={require('../../../../assets/chat.png')}
        />
  
      </div>
      
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
            We are easily accessible to you and we enjoy sharing personal contact with our partners.
            
            <h6
              style={{
                color: window.innerWidth < 500 ? 'black' :  '#767676',
                fontFamily: 'Rockwell',
                marginTop: '5%'
              }}
            >
              You will always be directly in contact with us, we use most available technologies to communicate, so we’re just a call or click away when you contact us via: Twitter/ Instagram/ LinkedIn/ Email/ Skype/ Cellphone/ WhatsApp/ SMS or other means (whichever suits you best)
            </h6>
          
          </h1>
  
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width:  window.innerWidth < 500 ? '100%' : '45%',
              marginBottom: window.innerWidth < 500 ? '10%' : 0
            }}
          >
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
            >
              <Icon
                type="twitter"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
  
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
            >
              <Icon
                type="instagram"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
  
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
            >
              <Icon
                type="linkedin"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
  
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
              onClick={()=> window.open("mailto:hello@startup-people.com?subject=Hello StartUp-People", "_blank")}
            >
              <Icon
                type="mail"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
  
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
            >
              <Icon
                type="skype"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
            
            <Button
              style={{
                color: '#fff',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#F06827',
                fontFamily: 'Rockwell',
              }}
            >
              <Icon
                type="phone"
                style={{
                  fontSize: '20px',
                  marginTop: 8
                }}
              />
            </Button>
          </div>
        
        
        </div>
      
      </div>
    
    </Layout>
  )
}

const ContactView = Contact

export default ContactView
