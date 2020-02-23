import React, { useState } from 'react';

import { Form, Icon, Layout, Tooltip, Input, Checkbox, Button } from "antd";

import { history } from "../../redux/store";

import backgroundImage from '../../assets/bkImg.png';

interface StateProps {

}

interface Props {
  form: any
}

type ContainerProps = Props & StateProps

// @ts-ignore
export const ProfessionalSignUp: React.FC = (props: ContainerProps) => {
  const imageUrl = backgroundImage;
  const { getFieldDecorator } = props.form;
  const [confirmDirty] = useState(false);
  
  const validateToNextPassword = (rule: any, value: any, callback: () => void) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }
  
  const compareToFirstPassword = (rule: any, value: any, callback: { (arg0: string): void; (): void; }) => {
    const form = props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback("Passwords do not match");
    } else {
      callback();
    }
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
              Join StartUp-People today to get matched with companies.
    
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
                  What is your
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
                  full name?
                </h6>
              </div>
  
  
              <Form.Item
                style={{
                  width: window.innerWidth < 500 ? '100%' : '70%',
                }}
              >
                {getFieldDecorator('fullName', {
                  rules: [{
                    min: 1,
                    message: 'Please enter your full name'
                  }, {
                    required: true,
                    pattern: new RegExp(/\s/),
                    message: "e.g Jane Doe"
                  }],
                })(
                  <Input
                    name={'fullName'}
                    // disabled={isLoading}
                    allowClear
                    placeholder="Jane Doe"
                  />
                )}
              </Form.Item>
  
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
                  What is your
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
                  width: window.innerWidth < 500 ? '100%' : '70%',
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
                    // disabled={isLoading}
                    name={'email'}
                    allowClear
                    placeholder="jane@doe.com " />
                )}
              </Form.Item>
  
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
                  Enter your
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
                  password
                </h6>
              </div>
  
  
              <Form.Item
                style={{
                  width: window.innerWidth < 500 ? '100%' : '70%',
                }}
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: 'Please input your password!',
                  }, {
                    min: 6,
                    message: '6 or more digits',
                  }, {
                    validator: validateToNextPassword,
                  }],
                })(
                  <Input.Password
                    // disabled={isLoading}
                    name={'password'}
                    allowClear
                    type="password"
                    placeholder="**********"
                  />
                )}
              </Form.Item>
  
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
                  Confirm your
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
                  password
                </h6>
              </div>
  
  
              <Form.Item
                style={{
                  width: window.innerWidth < 500 ? '100%' : '70%',
                }}
              >
                {getFieldDecorator('confirmPassword', {
                  rules: [{
                    required: true, message: 'Confirm your password!',
                  }, {
                    validator: compareToFirstPassword,
                  }],
                })(
                  <Input.Password
                    name={'confirmPassword'}
                    // disabled={isLoading}
                    autoFocus
                    allowClear
                    type="password"
                    placeholder="**********"
                  />
                )}
              </Form.Item>
  
  
              <Form.Item>
                {getFieldDecorator('hasRead', {
                  valuePropName: 'checked',
                  // onChange: (value: any) => hasReadTerms(value.target.checked),
                  rules: [{
                    required: true,
                    message: 'Please confirm you have read our T&C.',
                  }]
                })(
                  <Checkbox
                    // value={hasAgreed}
                  >I have read the <a
                    target="_blank"
                    href="/tandc"
                  >
                    terms and conditions
                  </a>
                  </Checkbox>
                )}
              </Form.Item>
  
  
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: '#F06827',
                    color: '#FFFFFF',
                    marginLeft: 50
                  }}
                  size={'large'}
                  // disabled={isLoading}
                  htmlType="submit"
                  className="login-form-button"
                  // onClick={(value) => hasAgreed ? handleSubmit(value) : handleNotSignedAgreement()}
                >
                  Sign Up
                </Button> Or <a
                onClick={() => history.push('/')}
                href="/"
              >
                Sign In
              </a>
              </Form.Item>
              
              
            </h1>
          </div>
  
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
          }}
        >
  
          <img
            style={{
              height: '40%',
              width: '70%',
            }}
            src={require('../../assets/professional.png')}
          />
          
        </div>
        
        
      
      </div>
      
  
    </Layout>
  )
}

const ProfessionalSignUpView = Form.create()(ProfessionalSignUp)

export default ProfessionalSignUpView
