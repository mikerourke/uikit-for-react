import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';

export default class CoverContainer extends React.Component {
  static displayName = 'CoverContainer';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    aspectRatio: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    children: ExtraPropTypes.and([
      PropTypes.node,
      ExtraPropTypes.componentWithName('Cover').isRequired,
    ]),
    className: PropTypes.string,
    viewportOptions: PropTypes.shape({
      expand: PropTypes.bool,
      minHeight: PropTypes.number,
      offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      offsetTop: PropTypes.bool,
    }),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const {
      aspectRatio,
      children,
      className,
      viewportOptions,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-cover-container');

    const canvasProps = {
      height: get(aspectRatio, 'height', 600),
      width: get(aspectRatio, 'width', 800),
    };

    return (
      <BlockElement
        {...rest}
        className={classes}
        data-uk-height-viewport={getOptionsString(viewportOptions)}
      >
        {aspectRatio && <canvas {...canvasProps} />}
        {children}
      </BlockElement>
    );
  }
}
