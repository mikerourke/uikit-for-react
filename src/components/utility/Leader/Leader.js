import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { getOptionsString, UIK } from '../../../lib';
import { BaseElement } from '../../base';

export default class Leader extends React.Component {
  static displayName = 'Leader';

  static propTypes = {
    ...BaseElement.propTypes,
    as: BaseElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    fill: PropTypes.string,
    media: PropTypes.oneOfType([
      ExtraPropTypes.nonNegativeInteger,
      PropTypes.oneOf(UIK.BREAKPOINTS),
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    ...BaseElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { fill, media, ...rest } = this.props;
    const componentOptions = getOptionsString({
      fill,
      media,
    });
    return <BaseElement {...rest} data-uk-leader={componentOptions} />;
  }
}
