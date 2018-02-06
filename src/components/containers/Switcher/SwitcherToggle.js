import React from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class SwitcherToggle extends React.Component {
  static displayName = 'SwitcherToggle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const { as, children, href, ...rest } = this.props;
    const isAsString = isString(as);
    const Element = getElementType(SwitcherToggle, as);
    return (
      <Element {...rest}>
        {isAsString ? <a href={href}>{children}</a> : children}
      </Element>
    );
  }
}
