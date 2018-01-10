import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const mapStateToProps = state => ({
	data: state.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchData: (data) => dispatch(fetchData(data))
});

export const withData = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
