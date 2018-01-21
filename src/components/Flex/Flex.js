import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Flex extends BlockElement {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    ...omit(BlockElement.propTypes, 'flex'),
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    inline: false,
  };

  render() {
    const { children, className, inline, ...rest } = this.props;

    const classes = classnames(className, Flex.meta.ukClass, {
      [buildClassName(Flex.meta.ukClass, 'inline')]: inline,
    });

    return (
      <BlockElement {...rest} className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
