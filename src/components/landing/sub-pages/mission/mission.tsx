import React from 'react';

import { Layout, Button } from "antd";

interface StateProps {

}

interface Props {

}

type ContainerProps = Props & StateProps

export const Mission: React.FC = (props: ContainerProps) => {
  
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
             color: '#433a59',
             fontFamily: 'Rockwell',
             fontSize: 28,
             width: '85%',
           }}
         >
           We are convinced that nothing we do is more important than hiring and developing people
    
           <h6
             style={{
               color: '#767676',
               fontFamily: 'Rockwell',
               marginTop: '5%'
             }}
           >
             “Our employees are our greatest asset”
           </h6>
           
           <h6
             style={{
               color: '#767676',
               fontFamily: 'Rockwell',
             }}
           >
             - Ada O.
           </h6>
         </h1>
  
         {
           window.innerWidth < 500 && (
             <Button
               style={{
                 color: '#fff',
                 width: '90%',
                 height: 50,
                 backgroundColor: '#F06827',
                 borderRadius: 8,
                 fontFamily: 'Rockwell',
               }}
             >
               JOIN
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
            height: '40%',
            width: '70%',
            marginTop: 40
          }}
          src={require('../../../../assets/callerImg.png')}
        />
  
      </div>
    
    </Layout>
  )
}

const MissionView = Mission

export default MissionView
