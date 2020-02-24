import React, { useState } from 'react';

import { Form, Icon, Layout, Input, Button } from "antd";

import { history } from "../../redux/store";
import { signInWithEmailParams, socialAuthParams } from "../../redux/auth/auth.actions.d";

import backgroundImage from '../../assets/bkImg.png';
import HeaderView from "../../common/header/header";

interface StateProps {
  isLoading: boolean
}

interface Props {
  form: any
  sigInUserWithEmailAsync: (data: signInWithEmailParams) => void
  googleAuthAsync: (data: socialAuthParams) => void
  facebookAuthAsync: (data: socialAuthParams) => void
  forgotPasswordAsync: (email: string) => void
}

type ContainerProps = Props & StateProps

// @ts-ignore
export const EmailSignIn: React.FC = (props: ContainerProps) => {
  
  const imageUrl = backgroundImage;
  const {
    isLoading, sigInUserWithEmailAsync, googleAuthAsync, facebookAuthAsync, forgotPasswordAsync
  } = props;
  const { getFieldDecorator } = props.form;
  const [authType, setAuthType] = useState('email')
  const [userType] = useState('company')
  const [actionType] = useState('signIn')
  
  /**
   * handleSignUpWithEmail
   *
   * @param e
   */
  const handleSignUpWithEmail = (e: any) => {
    e.preventDefault();
    setAuthType('email')
    props.form.validateFields(["email", "password"], (err: any, values: any) => {
      if (!err) {
        sigInUserWithEmailAsync(values)
      }
    });
  }
  
  /**
   * handleSignInWithGoogle
   *
   * @param e
   */
  const handleSignInWithGoogle = (e: any) => {
    e.preventDefault();
    const values = {
      userType,
      actionType
    }
    googleAuthAsync(values)
  }
  
  /**
   * handleSignInWithFacebook
   *
   * @param e
   */
  const handleSignInWithFacebook = (e: any) => {
    e.preventDefault();
    const values = {
      userType,
      actionType
    }
    facebookAuthAsync(values)
  }
  
  const renderSocialButtons = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width:  window.innerWidth < 1100 ? '50%' : '20%',
        }}
      >
    
        <Button
          onClick={handleSignInWithFacebook}
          style={{
            color: '#fff',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#3b5998',
            fontFamily: 'Rockwell',
          }}
          disabled={isLoading}
        >
          <Icon
            type="facebook"
            style={{
              fontSize: '20px',
            }}
          />
        </Button>
    
        <Button
          onClick={handleSignInWithGoogle}
          style={{
            color: '#fff',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#DB4437',
            fontFamily: 'Rockwell',
          }}
          disabled={isLoading}
        >
          <Icon
            type="google"
            style={{
              fontSize: '20px',
            }}
          />
        </Button>
      </div>
    )
  }
  
  /**
   * forgotPasswordAsync
   * @param e
   */
  const forgotPassword = (e: any) => {
    props.form.validateFields((['email']), (err: any, values: any) => {
      if (!err) {
        forgotPasswordAsync(values.email)
      }
    })
  }
  
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
      {window.innerWidth < 1100 && <HeaderView />}
      
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            width: window.innerWidth < 500 ? '100%' : '50%',
            backgroundColor: '#FFF',
            flexDirection: 'column'
          }}
        >
  
  
          {
            window.innerWidth > 1100 && (
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
        
                {window.innerWidth > 500 && renderSocialButtons()}
      
              </div>
            )
          }
          
          <div
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
              Welcome back, please sign in.
              <h6
                style={{
                  color: '#767676',
                  fontFamily: 'Rockwell',
                  marginTop: '5%'
                }}
              >
                Get in touch with professionals, view messages, save and edit your profile and more.
              </h6>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  // justifyContent: 'space-evenly'
                }}
              >
                <h6
                  style={{
                    color: '#767676',
                    fontFamily: 'Rockwell',
                    marginTop: '5%'
                  }}
                >
                  Enter is your
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
                  email?
                </h6>
              </div>
              
              
              <Form.Item
                style={{
                  width: window.innerWidth < 1100 ? '100%' : '70%',
                }}
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input
                    disabled={isLoading}
                    name={'email'}
                    allowClear
                    placeholder="jane@doe.com " />
                )}
              </Form.Item>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: "row",
                }}
              >
                <h6
                  style={{
                    color: '#767676',
                    fontFamily: 'Rockwell',
                  }}
                >
                  Enter your
                </h6>
                
                &nbsp;
                
                <h6
                  style={{
                    color: '#767676',
                    fontFamily: 'Rockwell',
                    fontWeight: 'bold'
                  }}
                >
                  password
                </h6>
              </div>
              
              
              <Form.Item
                style={{
                  width: window.innerWidth < 1100 ? '100%' : '70%',
                }}
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: 'Please input your password!',
                  }, {
                    min: 6,
                    message: '6 or more digits',
                  }],
                })(
                  <Input.Password
                    disabled={isLoading}
                    name={'password'}
                    allowClear
                    type="password"
                    placeholder="**********"
                  />
                )}
              </Form.Item>
  
              <h6
                style={{
                  color: '#767676',
                  fontFamily: 'Rockwell',
                }}
              >
                <a
                  style={{
                    color: '#0c2136',
                    fontSize: '10',
                  }}
                  onClick={forgotPassword}
                >
                  Forgot password?
                </a>
              </h6>
              
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: '#F06827',
                    color: '#FFFFFF',
                    marginLeft: window.innerWidth < 1100 ? '0' : '20%',
                    marginTop: '5%',
                    width: window.innerWidth < 1100 ? '100%' : '25%',
                  }}
                  size={'large'}
                  disabled={isLoading}
                  htmlType="submit"
                  className="login-form-button"
                  onClick={handleSignUpWithEmail}
                >
                  Sign In
                </Button>
              </Form.Item>
  
              <h6
                style={{
                  color: '#767676',
                  fontFamily: 'Rockwell',
                  marginTop: '5%'
                }}
              >
                Don't have an account? Create as a <a
                onClick={() => history.push('/')}
                href="/professional/create"
              >
                Professional
              </a> or <a
                onClick={() => history.push('/')}
                href="/company/create"
              >
                Company
              </a>
              </h6>
            
            
            </h1>
  
            {window.innerWidth < 1100 && renderSocialButtons()}
          </div>
        
        </div>
        
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            width: window.innerWidth < 1100 ? '0%' : '50%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#707E91'
          }}
        >
          
          <img
            style={{
              height: '40%',
              width: '70%',
            }}
            src={require('../../assets/welcome.png')}
          />
        
        </div>
      
      
      
      </div>
    
    
    </Layout>
  )
}

const EmailSignInView = Form.create()(EmailSignIn)

export default EmailSignInView
