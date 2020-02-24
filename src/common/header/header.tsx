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
        width: '90%',
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
          width: '90%',
          // alignSelf: 'center',
          // justifyContent: "flex-end",
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
        overflowedIndicator={<Icon type="menu-fold"/>}
      >
  
        <Icon
          style={{
            marginLeft: '10%',
            marginRight: window.innerWidth < 500 ? '45%' : '35%',
          }}
          onClick={() => {
            setTimeout(() => {
              history.push('/')
              window.location.reload();
            }, 1000)
          }}
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
            onClick={() => {
              setTimeout(() => {
                history.push('/manage')
                window.location.reload();
              }, 1000)
            }}
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
            onClick={() => {
              setTimeout(() => {
                history.push('/company/create')
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
            key="5"
            onClick={() => {
              setTimeout(() => {
                history.push('/manage')
                window.location.reload();
              }, 1000)
            }}
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
