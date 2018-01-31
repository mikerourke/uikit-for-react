import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import { getOptionsString, UIK } from '../../../lib';
import { AnyElement } from '../../base';

export default class Leader extends React.Component {
  static displayName = 'Leader';

  static propTypes = {
    ...AnyElement.propTypes,
    as: AnyElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    fill: PropTypes.string,
    media: PropTypes.oneOfType([
      CustomPropTypes.nonNegativeInteger,
      PropTypes.oneOf(UIK.BREAKPOINTS),
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    ...AnyElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { fill, media, ...rest } = this.props;
    const componentOptions = getOptionsString({
      fill,
      media,
    });
    return <AnyElement {...rest} data-uk-leader={componentOptions} />;
  }
}
