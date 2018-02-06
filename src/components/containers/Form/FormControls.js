import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class FormControls extends React.Component {
  static displayName = 'FormControls';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    alignForText: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    alignForText: false,
    className: '',
  };

  render() {
    const { alignForText, as, className, ...rest } = this.props;

    const ukClass = 'uk-form-controls';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'text')]: alignForText,
    });

    const Element = getElementType(FormControls, this.props);
    return <Element {...rest} className={classes} />;
  }
}
