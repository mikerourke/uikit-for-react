import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';

export default class CoverContainer extends React.Component {
  static displayName = 'CoverContainer';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
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
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      aspectRatio,
      children,
      className,
      viewportOptions,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-cover-container');
    const componentOptions = getOptionsString(viewportOptions);
    const canvasProps = {
      height: get(aspectRatio, 'height', 600),
      width: get(aspectRatio, 'width', 800),
    };

    const Element = getElementType(CoverContainer, as);
    return (
      <Element
        {...rest}
        className={classes}
        data-uk-height-viewport={componentOptions}
      >
        {aspectRatio && <canvas {...canvasProps} />}
        {children}
      </Element>
    );
  }
}
