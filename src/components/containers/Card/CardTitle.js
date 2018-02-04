import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import { BlockElement } from '../../base';

export default class CardTitle extends React.Component {
  static displayName = 'CardTitle';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'h3',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-card-title');
    return <BlockElement {...rest} className={classes} />;
  }
}
