import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class TableBody extends React.Component {
  static displayName = 'TableBody';

  static propTypes = {
    as: customPropTypes.customOrStringElement('tbody'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'tbody',
    className: '',
  };

  render() {
    const { as, className, flex, inverse, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(TableBody, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
