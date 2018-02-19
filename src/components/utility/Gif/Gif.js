import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import {
  Align,
  Flex,
  Inverse,
  Margin,
  Text,
  Utility,
  Width,
} from '../../common';

export default class Gif extends React.Component {
  static displayName = 'Gif';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    children: ExtraPropTypes.explicitNull(),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    src: PropTypes.string.isRequired,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      inverse,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const Element = getElementType(Gif, as);
    return (
      <Element {...rest} className={classes || undefined} data-uk-gif="" />
    );
  }
}
