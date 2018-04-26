import React from 'react';
import { SlidenavPrevious } from '../Slidenav';

export default class SlideshowPrevious extends React.Component {
  static displayName = 'SlideshowPrevious';

  static propTypes = SlidenavPrevious.propTypes;
  static defaultProps = SlidenavPrevious.defaultProps;

  render() {
    return (
      <SlidenavPrevious
        {...this.props}
        component={SlideshowPrevious}
        uk-slideshow-item="previous"
      />
    );
  }
}
