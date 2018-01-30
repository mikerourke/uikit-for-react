import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class FormControls extends React.Component {
  static displayName = 'FormControls';

  static propTypes = {
    ...BlockElement.propTypes,
    alignForText: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    alignForText: false,
    className: '',
  };

  render() {
    const { alignForText, className, ...rest } = this.props;

    const ukClass = 'uk-form-controls';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'text')]: alignForText,
    });

    return <BlockElement {...rest} as="div" className={classes} />;
  }
}
