import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getOptionsString } from '../../../lib';
import Base from '../../base';
import VideoSource from './VideoSource';

export default class Video extends React.Component {
  static displayName = 'Video';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('video', 'iframe'),
    automute: PropTypes.bool,
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['inview']),
    ]),
    children: customPropTypes.restrictToChildTypes(VideoSource),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'video',
  };

  static Source = VideoSource;

  render() {
    const { automute, autoplay, ...rest } = this.props;
    return (
      <Base
        {...rest}
        component={Video}
        data-uk-video={getOptionsString({ automute, autoplay })}
      />
    );
  }
}
