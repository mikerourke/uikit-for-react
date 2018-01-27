import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class Flex extends React.Component {
  static displayName = 'Flex';

  static propTypes = {
    ...omit(BlockElement.propTypes, 'flex'),
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    inline: false,
  };

  render() {
    const { children, className, inline, ...rest } = this.props;

    const ukClass = 'uk-flex';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'inline')]: inline,
    });

    return (
      <BlockElement {...rest} className={classes || undefined} />
    );
  }
}
