import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Close extends React.Component {
  static displayName = 'Close';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    large: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    large: false,
  };

  render() {
    const { className, large, ...rest } = this.props;
    const classes = classnames(className, 'uk-close', {
      'uk-close-large': large,
    });
    return (
      <Base {...rest} className={classes} component={Close} data-uk-close="" />
    );
  }
}
