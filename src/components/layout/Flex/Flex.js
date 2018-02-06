import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';

export default class Flex extends React.Component {
  static displayName = 'Flex';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    inline: false,
  };

  render() {
    const { as, className, inline, ...rest } = this.props;

    const ukClass = 'uk-flex';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'inline')]: inline,
    });

    const Element = getElementType(Flex, as);
    return <Element {...rest} className={classes} />;
  }
}
