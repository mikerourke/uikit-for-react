import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import { getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';
import VideoSource from './VideoSource';

export default class Video extends React.Component {
  static displayName = 'Video';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['video', 'iframe']),
      PropTypes.element,
      PropTypes.func,
    ]),
    automute: PropTypes.bool,
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['inview']),
    ]),
    children: CustomPropTypes.childrenOfType(VideoSource),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  static Source = VideoSource;

  render() {
    const { automute, autoplay, ...rest } = this.props;
    const componentOptions = getOptionsString({ automute, autoplay });
    return <BlockElement {...rest} data-uk-video={componentOptions} />;
  }
}
