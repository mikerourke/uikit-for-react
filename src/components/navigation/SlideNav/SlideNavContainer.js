import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
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
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-slidenav-container',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(SlideNavContainer, as);
    return <Element {...rest} className={classes} />;
  }
}
