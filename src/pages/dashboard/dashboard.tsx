import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { ApplicationState } from "../../redux/reducers";

import DashboardView from "../../components/dashboard";

interface StateProps {

}

interface DispatchProps {

}

type ContainerProps = DispatchProps & StateProps

class Dashboard extends React.Component<ContainerProps, StateProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <DashboardView
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({

});

let MapStateToProps: (state: ApplicationState) => StateProps;
MapStateToProps = (state: ApplicationState): StateProps => ({
  isLoading: state.auth.loading,
});

export const DashboardPage = connect(
  MapStateToProps,
  // @ts-ignore
  mapDispatchToProps
)(Dashboard);
