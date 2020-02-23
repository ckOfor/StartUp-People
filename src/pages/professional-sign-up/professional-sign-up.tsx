import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";
import {createUserWithEmailAsync, facebookAuthAsync, googleAuthAsync} from "../../redux/auth";
import { signUpWithEmailParams, socialAuthParams } from "../../redux/auth/auth.actions.d";

import ProfessionalSignUpView from "../../components/professionalSignUp/professionalSignUp";

interface StateProps {
  isLoading: boolean
}

interface DispatchProps {
  createUserWithEmailAsync: (data: signUpWithEmailParams) => void
  googleAuthAsync: (data: socialAuthParams) => void
  facebookAuthAsync: (data: socialAuthParams) => void
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
  googleAuthAsync: (data: socialAuthParams) => dispatch(googleAuthAsync(data)),
  facebookAuthAsync: (data: socialAuthParams) => dispatch(facebookAuthAsync(data)),
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
