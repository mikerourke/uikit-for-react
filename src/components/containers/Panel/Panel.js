import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Panel extends React.Component {
  static displayName = 'Panel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    scrollable: false,
  };

  render() {
    const { as, className, scrollable, ...rest } = this.props;

    const ukClass = 'uk-panel';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'scrollable')]: scrollable,
    });

    const Element = getElementType(Panel, as);
    return <Element {...rest} className={classes} />;
  }
}
