import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
} from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import VideoSource from './VideoSource';

export default class Video extends React.Component {
  static displayName = 'Video';

  static propTypes = {
    as: customPropTypes.customOrStringElement('video', 'iframe'),
    automute: PropTypes.bool,
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['inview']),
    ]),
    children: customPropTypes.restrictToChildTypes(VideoSource),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'video',
    className: '',
  };

  static Source = VideoSource;

  render() {
    const {
      as,
      automute,
      autoplay,
      className,
      flex,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({ automute, autoplay });

    const Element = getElementType(Video, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-video={componentOptions}
      />
    );
  }
}
