import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class SwitcherContent extends React.Component {
  static displayName = 'SwitcherContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-switcher');
    const Element = getElementType(SwitcherContent, as);
    return <Element {...rest} className={classes} />;
  }
}
