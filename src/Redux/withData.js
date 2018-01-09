import React from 'react';
import { connect } from 'react-redux';
import { updateData } from './actions';

const mapStateToProps = state => ({
	data: state.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateData: (data) => dispatch(updateData(data))
});

export const withData = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
