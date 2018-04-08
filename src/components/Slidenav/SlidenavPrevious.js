import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class SlidenavPrevious extends React.Component {
  static displayName = 'SlidenavPrevious';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    href: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    large: false,
  };

  render() {
    const { className, large, ...rest } = this.props;

    const classes = classnames(className, { 'uk-slidenav-large': large });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={SlidenavPrevious}
        uk-slidenav-previous=""
      />
    );
  }
}
