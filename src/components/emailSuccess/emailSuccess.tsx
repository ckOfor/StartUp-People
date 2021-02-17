import React, { useState } from 'react';

import { Form, Icon, Layout, Button } from "antd";

import { history } from "../../redux/store";

import backgroundImage from '../../assets/bkImg.png';

interface StateProps {
  isLoading: boolean
  email: string
}

interface Props {
  form: any
  sendEmailVerificationLinkAsync: () => void
}

type ContainerProps = Props & StateProps

// @ts-ignore
export const EmailSuccess: React.FC = (props: ContainerProps) => {
  
  const imageUrl = backgroundImage;
  const { email, isLoading, sendEmailVerificationLinkAsync } = props;
  
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
      
      <div
        className="adminSignInPageApp"
        style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        
        <div
          className="adminSignInPageApp"
          style={{
            display: 'flex',
            minHeight: '100vh',
            width: window.innerWidth < 500 ? '100%' : '50%',
            backgroundColor: '#FFF',
            flexDirection: 'column'
          }}
        >
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            
            <Icon
              onClick={() => {
                setTimeout(() => {
                  history.push('/')
                  window.location.reload();
                }, 1000)
              }}
              component={() => (
                <img
                  style={{
                    height: 80,
                    margin: '10%'
                  }}
                  src={require(`../../assets/logo.png`)}
                />
              )}
            />
          
          </div>
          
          <div
            className="adminSignInPageApp"
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: "column"
            }}
          >
            
            <h1
              style={{
                color: '#433a59',
                fontFamily: 'Rockwell',
                fontSize: 28,
                width: '85%',
              }}
            >
              Welcome to StartUp-People, please check your email!
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: "row"
                }}
              >
                <h6
                  style={{
                    color: '#767676',
                    fontFamily: 'Rockwell',
                    marginTop: '5%'
                  }}
                >
                  We've sent and email to
                </h6>
                
                &nbsp;
                
                <h6
                  style={{
                    color: '#767676',
                    fontFamily: 'Rockwell',
                    marginTop: '5%',
                    fontWeight: 'bold'
                  }}
                >
                  {email}
                </h6>
              </div>
  
              <h6
                style={{
                  color: '#767676',
                  fontFamily: 'Rockwell',
                }}
              >
                We need you to verify your email address so you can finish creating your account.
              </h6>
  
              <h6
                style={{
                  color: '#767676',
                  fontFamily: 'Rockwell',
                  marginTop: '5%',
                }}
              >
                To continue, go open your email. To login click <a
                onClick={() => history.push('/')}
                href="/manage"
              >
                here!
              </a>
              </h6>
            
            </h1>
            
          </div>
  
          <Form.Item
            style={{
              width: '100%',
              marginLeft: '40%'
            }}
          >
            <Button
              style={{
                backgroundColor: '#F06827',
                color: '#FFFFFF',
              }}
              size={'large'}
              disabled={isLoading}
              htmlType="submit"
              className="login-form-button"
              onClick={sendEmailVerificationLinkAsync}
            >
              RESEND
            </Button>
          </Form.Item>
        
        </div>
        
        <div
          className="adminSignInPageApp"
          style={{
            display: 'flex',
            minHeight: '100vh',
            width: window.innerWidth < 500 ? '0%' : '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F06827'
            // backgroundColor: '#707E91'
          }}
        >
          
          <img
            style={{
              height: '40%',
              width: '70%',
            }}
            // src={require('../../assets/win2.png')}
            src={require('../../assets/win.png')}
          />
        
        </div>
        
      </div>
    
    
    </Layout>
  )
}

const EmailSuccessView = Form.create()(EmailSuccess)

export default EmailSuccessView
