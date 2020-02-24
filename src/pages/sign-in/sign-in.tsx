import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";
import {facebookAuthAsync, forgotPasswordAsync, googleAuthAsync, sigInUserWithEmailAsync} from "../../redux/auth";
import { signInWithEmailParams, socialAuthParams } from "../../redux/auth/auth.actions.d";

import EmailSignInView from "../../components/emailSignIn";

interface StateProps {
  isLoading: boolean
}

interface DispatchProps {
  sigInUserWithEmailAsync: (data: signInWithEmailParams) => void
  googleAuthAsync: (data: socialAuthParams) => void
  facebookAuthAsync: (data: socialAuthParams) => void
  forgotPasswordAsync: (email: string) => void
}

type ContainerProps = DispatchProps & StateProps

class EmailSignIn extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <EmailSignInView
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  sigInUserWithEmailAsync: (data: signInWithEmailParams) => dispatch(sigInUserWithEmailAsync(data)),
  googleAuthAsync: (data: socialAuthParams) => dispatch(googleAuthAsync(data)),
  facebookAuthAsync: (data: socialAuthParams) => dispatch(facebookAuthAsync(data)),
  forgotPasswordAsync: (email: string) => dispatch(forgotPasswordAsync(email)),
});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({
  isLoading: state.auth.loading,
});

export const EmailSignInPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(EmailSignIn);
