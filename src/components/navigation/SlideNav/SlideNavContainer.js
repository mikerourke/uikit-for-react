import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import SlideNavNext from './SlideNavNext';
import SlideNavPrevious from './SlideNavPrevious';

export default class SlideNavContainer extends React.Component {
  static displayName = 'SlideNavContainer';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(
      SlideNavNext,
      SlideNavPrevious,
    ),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slidenav-container');
    return <Base {...rest} className={classes} component={SlideNavContainer} />;
  }
}
