import React from 'react';
import { SlidenavNext } from '../Slidenav';

export default class SlideshowNext extends React.Component {
  static displayName = 'SlideshowNext';

  static propTypes = SlidenavNext.propTypes;
  static defaultProps = SlidenavNext.defaultProps;

  render() {
    return (
      <SlidenavNext
        {...this.props}
        component={SlideshowNext}
        uk-slideshow-item="next"
      />
    );
  }
}
