import React from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { BlockElement } from '../../base';

export default class SwitcherToggle extends React.Component {
  static displayName = 'SwitcherToggle';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const { as, children, href, ...rest } = this.props;
    const isAsString = isString(as);
    const Element = isAsString ? BlockElement : as;
    return (
      <Element {...rest} as={as}>
        {isAsString ? <a href={href}>{children}</a> : children}
      </Element>
    );
  }
}
