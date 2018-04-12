/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

/**
 * This component exposes a callback prop that always returns the DOM node of
 * both functional and class component children.
 */
export default class Ref extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    innerRef: PropTypes.func,
  };

  componentDidMount() {
    const { innerRef } = this.props;

    // Heads up! Don't move this condition, it's a short circuit that avoids
    // run of `findDOMNode` if `innerRef` isn't passed
    if (innerRef) innerRef(findDOMNode(this));
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
