import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { InlineElement } from '../../base';

export default class SwitcherGoTo extends React.Component {
  static displayName = 'SwitcherGoTo';

  static propTypes = {
    ...InlineElement.propTypes,
    as: InlineElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['next', 'previous']),
      ExtraPropTypes.nonNegativeInteger,
    ]).isRequired,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: '',
  };

  render() {
    const { target, ...rest } = this.props;
    return (
      <InlineElement {...rest} data-uk-switcher-item={target.toString()} />
    );
  }
}
