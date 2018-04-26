import React from 'react';
import { SlidenavPrevious } from '../Slidenav';

export default class SliderPrevious extends React.Component {
  static displayName = 'SliderPrevious';

  static propTypes = SlidenavPrevious.propTypes;
  static defaultProps = SlidenavPrevious.defaultProps;

  render() {
    return (
      <SlidenavPrevious
        {...this.props}
        component={SliderPrevious}
        uk-slider-item="previous"
      />
    );
  }
}
