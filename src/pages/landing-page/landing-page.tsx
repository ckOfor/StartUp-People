import React from 'react';

import LandingView from '../../components/landing/landing';

interface StateProps {

}

interface DispatchProps {

}

type ContainerProps = DispatchProps & StateProps

class LandingPage extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <LandingView />
    )
  }
}

export default LandingPage
