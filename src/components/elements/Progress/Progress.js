import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class Progress extends React.Component {
  static displayName = 'Progress';

  static propTypes = {
    as: customPropTypes.customOrStringElement('progress'),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'progress',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-progress');
    const Element = getElementType(Progress, as);
    return <Element {...rest} className={classes} />;
  }
}
