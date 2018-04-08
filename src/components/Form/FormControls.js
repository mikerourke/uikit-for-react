import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class FormControls extends React.Component {
  static displayName = 'FormControls';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    alignForText: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    as: 'div',
    alignForText: false,
  };

  render() {
    const { alignForText, className, ...rest } = this.props;

    const classes = classnames(className, 'uk-form-controls', {
      'uk-form-controls-text': alignForText,
    });

    return <Base {...rest} className={classes} component={FormControls} />;
  }
}
