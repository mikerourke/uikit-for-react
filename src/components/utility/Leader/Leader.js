import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getOptionsString, HTML, UIK } from '../../../lib';
import Base from '../../base';

export default class Leader extends React.Component {
  static displayName = 'Leader';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    fill: PropTypes.string,
    media: PropTypes.oneOfType([
      ExtraPropTypes.nonNegativeInteger,
      PropTypes.oneOf(UIK.BREAKPOINTS),
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { fill, media, ...rest } = this.props;
    return (
      <Base
        {...rest}
        component={Leader}
        data-uk-leader={getOptionsString({ fill, media })}
      />
    );
  }
}
