import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class CardTitle extends React.Component {
  static displayName = 'CardTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'h3',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-card-title',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(CardTitle, as);
    return <Element {...rest} className={classes} />;
  }
}
