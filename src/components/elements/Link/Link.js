import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      margin,
      muted,
      reset,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-link',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-link-muted': muted,
        'uk-link-reset': reset,
        'uk-link-text': text,
      },
    );

    const Element = getElementType(Link, as);
    return <Element {...rest} className={classes} />;
  }
}
