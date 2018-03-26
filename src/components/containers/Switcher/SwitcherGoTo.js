import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class SwitcherGoTo extends React.Component {
  static displayName = 'SwitcherGoTo';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['next', 'previous']),
      ExtraPropTypes.nonNegativeInteger,
    ]).isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  render() {
    const { target, ...rest } = this.props;
    return (
      <Base
        {...rest}
        component={SwitcherGoTo}
        uk-switcher-item={target.toString()}
      />
    );
  }
}
