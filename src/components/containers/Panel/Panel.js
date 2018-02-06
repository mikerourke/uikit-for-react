import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class Panel extends React.Component {
  static displayName = 'Panel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    scrollable: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    scrollable: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      margin,
      scrollable,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-panel',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-panel-scrollable': scrollable,
      },
    );

    const Element = getElementType(Panel, as);
    return <Element {...rest} className={classes} />;
  }
}
