import React from 'react';
import { connect } from 'react-redux';
import { updateId } from './actions';

const mapStateToProps = state => ({
	id: state.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateId: (id) => dispatch(updateId(id))
});

export const withId = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
