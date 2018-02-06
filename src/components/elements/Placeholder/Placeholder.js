import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class Placeholder extends React.Component {
  static displayName = 'Placeholder';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-placeholder');
    const Element = getElementType(Placeholder, as);
    return <Element {...rest} className={classes} />;
  }
}
