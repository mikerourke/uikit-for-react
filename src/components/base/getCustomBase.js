import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import { customPropTypes } from '../../lib';
import Base from './Base';

export default (
  options = {
    displayName: '',
    className: '',
    asType: customPropTypes.customOrStringElement('div'),
    asDefault: 'div',
    childrenType: PropTypes.node,
  },
) =>
  class CustomBase extends React.Component {
    static displayName = options.displayName;

    static propTypes = {
      ...Base.propTypes,
      as: get(options, 'asType', customPropTypes.customOrStringElement('div')),
      children: get(options, 'childrenType', PropTypes.node),
    };

    static defaultProps = {
      ...Base.defaultProps,
      as: get(options, 'asDefault', 'div'),
      children: null,
    };

    render() {
      const { className, ...rest } = this.props;
      const classes = classnames(className, options.className);
      return <Base {...rest} className={classes} component={CustomBase} />;
    }
  };
