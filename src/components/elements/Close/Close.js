import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class Close extends React.Component {
  static displayName = 'Close';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    large: PropTypes.bool,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
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
      'uk-close',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-close-large': large,
      },
    );

    const Element = getElementType(Close, as);
    return <Element {...rest} className={classes} data-uk-close="" />;
  }
}
