import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';
import ThumbnavItem from './ThumbnavItem';

export default class Thumbnav extends React.Component {
  static displayName = 'Thumbnav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: CustomPropTypes.childrenOfType(ThumbnavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    vertical: false,
  };

  static Item = ThumbnavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const ukClass = 'uk-thumbnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    return <BlockElement {...rest} as="ul" className={classes || undefined} />;
  }
}
