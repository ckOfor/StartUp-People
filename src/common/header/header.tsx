import React from 'react';

import { Layout, Form, Menu, Icon } from 'antd';

import { history } from '../../../src/redux/store';

const { Header } = Layout;
const { SubMenu } = Menu;

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const HeaderPage: React.FC = (props: ContainerProps) => {
	return (
		<Header
      style={{
        zIndex: 1,
        width: '100%',
        height: 90,
        backgroundColor: 'transparent',
      }}
    >
      
      <Menu
        // theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['0']}
        style={{
          lineHeight: '90px',
          width: '100%',
          alignSelf: 'center',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
        overflowedIndicator={<Icon type="menu-fold"/>}
      >
  
        <Icon
          style={{
            marginLeft: '20%',
            marginRight: window.innerWidth < 1000 ? '0%' : '20%',
          }}
          onClick={() => window.location.reload()}
          component={() => (
            <img
              style={{
                height: 80
              }}
              src={require(`../../assets/logo.png`)}
            />
          )}
        />
        
        <Menu.Item
          key="0"
          onClick={()=> window.open("mailto:hellostartupteam@gmail.com?subject=I have attached my  CV!", "_blank")}
        >
          <Icon
            type="home"
          />
          Careers
        </Menu.Item>
  
        <Menu.Item
          key="1"
          onClick={()=> window.open("mailto:hellostartupteam@gmail.com?subject=I need Help!", "_blank")}
        >
          <Icon
            type="home"
          />
          Help
        </Menu.Item>
  
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon
                type="user"
              />
              Professionals
            </span>
          }
        >
          <Menu.Item
            key="2"
            onClick={() => {
              setTimeout(() => {
                history.push('/professional/create')
                window.location.reload();
              }, 1000)
            }}
          >
            <Icon
              type="user-add"
            />
            Sign up
          </Menu.Item>
  
          <Menu.Item
            key="3"
            // onClick={() => showRavrModal('logIn')}
          >
            <Icon
              type="login"
            />
            Log in
          </Menu.Item>
        </SubMenu>
  
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon
                type="usergroup-add"
              />
              Companies
            </span>
          }
        >
          <Menu.Item
            key="4"
            // onClick={() => showRavrModal('signUp')}
          >
            <Icon
              type="user-add"
            />
            Sign up
          </Menu.Item>
    
          <Menu.Item
            key="5"
            // onClick={() => showRavrModal('logIn')}
          >
            <Icon
              type="login"
            />
            Log in
          </Menu.Item>
        </SubMenu>


      </Menu>
   
		</Header>
	)
}

const HeaderView = Form.create()(HeaderPage);

export default HeaderView
