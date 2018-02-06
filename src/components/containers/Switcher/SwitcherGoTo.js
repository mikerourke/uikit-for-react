import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class SwitcherGoTo extends React.Component {
  static displayName = 'SwitcherGoTo';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['next', 'previous']),
      ExtraPropTypes.nonNegativeInteger,
    ]).isRequired,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const { as, target, ...rest } = this.props;
    const Element = getElementType(SwitcherGoTo, as);
    return <Element {...rest} data-uk-switcher-item={target.toString()} />;
  }
}
