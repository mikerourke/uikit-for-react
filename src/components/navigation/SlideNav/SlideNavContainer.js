import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import SlideNavNext from './SlideNavNext';
import SlideNavPrevious from './SlideNavPrevious';

export default class SlideNavContainer extends React.Component {
  static displayName = 'SlideNavContainer';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(
      SlideNavNext,
      SlideNavPrevious,
    ),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slidenav-container');
    const Element = getElementType(SlideNavContainer, as);
    return <Element {...rest} className={classes} />;
  }
}
