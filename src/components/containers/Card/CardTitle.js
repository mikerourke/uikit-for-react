import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Margin } from '../../common';

export default class CardTitle extends React.Component {
  static displayName = 'CardTitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    margin: Margin.propTypes,
  };

  static defaultProps = {
    as: 'h3',
    className: '',
  };

  render() {
    const { as, className, margin, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-card-title',
      Margin.getClasses(margin),
    );

    const Element = getElementType(CardTitle, this.props);
    return <Element {...rest} className={classes} />;
  }
}
