import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getElementType } from '../../lib/index';

export default class VideoSource extends React.Component {
  static displayName = 'VideoSource';

  static propTypes = {
    as: customPropTypes.customOrStringElement('source'),
    children: ExtraPropTypes.restrictedProp(),
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'source',
  };

  render() {
    const { as, ...rest } = this.props;

    const Element = getElementType(VideoSource, as);

    return <Element {...rest} />;
  }
}
