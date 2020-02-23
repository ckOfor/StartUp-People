// react
import React, { useState } from 'react';

// third-party library
import {Layout, Form, Menu, Icon} from 'antd';

const { Header } = Layout;

// @ts-ignore
export const HeaderPage: React.FC = (props: Props) => {
	const [hasAgreed, setHasAgreed] = useState(false);
 
//   <!-- Load Facebook SDK for JavaScript -->
// 	<div id="fb-root"></div>
//   <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       xfbml            : true,
//       version          : 'v6.0'
//     });
//   };
//
//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));</script>
//
// <!-- Your customer chat code -->
// <div class="fb-customerchat"
// attribution=setup_tool
// page_id="333386090756262">
// </div>
	
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
            marginLeft: '18%',
            marginRight: window.innerWidth < 1000 ? '0%' : '20%',
          }}
          onClick={() => window.location.reload()}
          component={() => (
            <h1
              style={{
                fontFamily: 'Rockwell',
                color: '#F06827',
              }}
            >
              StartUp-People
            </h1>
          )}
        />
        
        <Menu.Item
          key="0"
          // onClick={() => showHelpModal()}
        >
          <Icon
            type="home"
          />
          Careers
        </Menu.Item>
  
        <Menu.Item
          key="1"
          // onClick={() => showHelpModal()}
        >
          <Icon
            type="home"
          />
          Help
        </Menu.Item>
        
        <Menu.Item
          key="2"
          // onClick={() => showRavrModal('signUp')}
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
      </Menu>
   
		</Header>
	)
}

const HeaderView = Form.create()(HeaderPage);

export default HeaderView
