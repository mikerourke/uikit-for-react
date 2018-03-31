import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import SlidenavNext from './SlidenavNext';
import SlidenavPrevious from './SlidenavPrevious';

export default class SlidenavContainer extends React.Component {
  static displayName = 'SlidenavContainer';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(
      SlidenavNext,
      SlidenavPrevious,
    ),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slidenav-container');
    return <Base {...rest} className={classes} component={SlidenavContainer} />;
  }
}
