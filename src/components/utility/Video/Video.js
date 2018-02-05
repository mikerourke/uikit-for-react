import React from 'react';
import PropTypes from 'prop-types';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
} from '../../../lib';
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
  };

  static defaultProps = {
    as: 'video',
    className: '',
  };

  static Source = VideoSource;

  render() {
    const { as, automute, autoplay, ...rest } = this.props;
    const Element = getElementType(Video, this.props);
    return (
      <Element
        {...rest}
        data-uk-video={getOptionsString({ automute, autoplay })}
      />
    );
  }
}
