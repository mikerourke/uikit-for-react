import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import { customPropTypes, getOptionsString, HTML } from '../../../lib';
import Base from '../../base';

export default class CoverContainer extends React.Component {
  static displayName = 'CoverContainer';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    aspectRatio: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    children: ExtraPropTypes.and([
      PropTypes.node,
      ExtraPropTypes.componentWithName('Cover').isRequired,
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { aspectRatio, children, className, viewport, ...rest } = this.props;

    const classes = classnames(className, 'uk-cover-container');
    const componentOptions = getOptionsString(viewport);
    const canvasProps = {
      height: get(aspectRatio, 'height', 600),
      width: get(aspectRatio, 'width', 800),
    };

    return (
      <Base
        {...rest}
        className={classes}
        component={CoverContainer}
        data-uk-height-viewport={componentOptions}
      >
        {aspectRatio && <canvas {...canvasProps} />}
        {children}
      </Base>
    );
  }
}
