import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";

import ProfessionalSignUpView from "../../components/ProfessionalSignUp/ProfessionalSignUp";

interface StateProps {

}

interface DispatchProps {

}

type ContainerProps = DispatchProps & StateProps

class ProfessionalSignUp extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <ProfessionalSignUpView />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({

});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({

});

export const ProfessionalSignUpPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(ProfessionalSignUp);
