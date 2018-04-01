import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class SwitcherToggle extends React.Component {
  static displayName = 'SwitcherToggle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
  };

  render() {
    const { as, children, href, ...rest } = this.props;

    const isAsString = isString(as);

    return (
      <Base {...rest} as={as} component={SwitcherToggle}>
        {isAsString ? <a href={href}>{children}</a> : children}
      </Base>
    );
  }
}
