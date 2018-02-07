import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class SlideNavNext extends React.Component {
  static displayName = 'SlideNavNext';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    href: PropTypes.string,
    margin: Margin.propTypes,
    width: Width.propTypes,
    large: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    href: '#',
    large: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      large,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-slidenav-large': large,
      },
    );

    const Element = getElementType(SlideNavNext, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-slidenav-next=""
      />
    );
  }
}
