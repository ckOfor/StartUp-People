import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";
import { sendEmailVerificationLinkAsync } from "../../redux/auth";

import EmailSuccessView from "../../components/emailSuccess";

interface StateProps {
  isLoading: boolean
  email: string
}

interface DispatchProps {
  sendEmailVerificationLinkAsync: () => void
}

type ContainerProps = DispatchProps & StateProps

class EmailSuccess extends React.Component<ContainerProps, StateProps> {
  componentDidMount(): void {
    this.props.sendEmailVerificationLinkAsync()
  }
  
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <EmailSuccessView
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  sendEmailVerificationLinkAsync: () => dispatch(sendEmailVerificationLinkAsync()),
});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({
  email: state.auth.email,
  isLoading: state.auth.loading,
});

export const EmailSuccessPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(EmailSuccess);
