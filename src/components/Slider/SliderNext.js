import React from 'react';
import { SlidenavNext } from '../Slidenav';

export default class SliderNext extends React.Component {
  static displayName = 'SliderNext';

  static propTypes = SlidenavNext.propTypes;
  static defaultProps = SlidenavNext.defaultProps;

  render() {
    return (
      <SlidenavNext
        {...this.props}
        component={SliderNext}
        uk-slider-item="next"
      />
    );
  }
}
