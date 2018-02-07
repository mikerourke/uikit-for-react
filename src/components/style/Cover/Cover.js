import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
import CoverContainer from './CoverContainer';

export default class Cover extends React.Component {
  static displayName = 'Cover';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img', 'video', 'iframe'),
    automute: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'img',
    automute: false,
    className: '',
  };

  static Container = CoverContainer;

  render() {
    const {
      as,
      automute,
      className,
      flex,
      inverse,
      margin,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({ automute });
    const Element = getElementType(Cover, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-cover={componentOptions}
      />
    );
  }
}
