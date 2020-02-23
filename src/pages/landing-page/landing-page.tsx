import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import LandingView from '../../components/landing/landing';

import { ApplicationState } from "../../redux/reducers";

interface StateProps {

}

interface DispatchProps {

}

type ContainerProps = DispatchProps & StateProps

class Landing extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <LandingView />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({

});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({

});

export const LandingPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(Landing);
