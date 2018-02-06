import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';

export default class Leader extends React.Component {
  static displayName = 'Leader';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
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
    as: 'div',
    className: '',
  };

  render() {
    const { as, fill, media, ...rest } = this.props;
    const componentOptions = getOptionsString({ fill, media });
    const Element = getElementType(Leader, this.props);
    return <Element {...rest} data-uk-leader={componentOptions} />;
  }
}
