import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";
import {createUserWithEmailAsync, facebookAuthAsync, googleAuthAsync} from "../../redux/auth";
import {signUpWithEmailParams } from "../../redux/auth/auth.actions.d";

import ProfessionalSignUpView from "../../components/professionalSignUp/professionalSignUp";

interface StateProps {
  isLoading: boolean
}

interface DispatchProps {
  createUserWithEmailAsync: (data: signUpWithEmailParams) => void
  googleAuthAsync: (userType: string) => void
  facebookAuthAsync: (userType: string) => void
}

type ContainerProps = DispatchProps & StateProps

class ProfessionalSignUp extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <ProfessionalSignUpView
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  createUserWithEmailAsync: (data: signUpWithEmailParams) => dispatch(createUserWithEmailAsync(data)),
  googleAuthAsync: (userType: string) => dispatch(googleAuthAsync(userType)),
  facebookAuthAsync: (userType: string) => dispatch(facebookAuthAsync(userType)),
});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({
  isLoading: state.auth.loading,
});

export const ProfessionalSignUpPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(ProfessionalSignUp);
