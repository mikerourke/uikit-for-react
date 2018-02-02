import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { InlineElement } from '../../base';

export default class VideoSource extends React.Component {
  static displayName = 'VideoSource';

  static propTypes = {
    ...InlineElement.propTypes,
    children: ExtraPropTypes.explicitNull,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: '',
  };

  render() {
    return <InlineElement {...this.props} as="source" />;
  }
}