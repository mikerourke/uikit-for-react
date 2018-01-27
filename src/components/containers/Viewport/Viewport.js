import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../../lib/index';
import { BlockElement } from '../../base/index';

export default class Viewport extends React.Component {
  static displayName = 'Viewport';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    expand: PropTypes.bool,
    minHeight: PropTypes.number,
    offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    offsetTop: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    expand: false,
    minHeight: null,
    offsetBottom: false,
    offsetTop: false,
  };

  render() {
    const { expand, minHeight, offsetBottom, offsetTop, ...rest } = this.props;

    const componentOptions = getOptionsString({
      expand,
      minHeight,
      offsetBottom,
      offsetTop,
    });

    return (
      <BlockElement {...rest} data-uk-height-viewport={componentOptions} />
    );
  }
}
