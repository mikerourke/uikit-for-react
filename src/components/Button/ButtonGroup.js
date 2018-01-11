import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildObjectOrValueClassNames, commonPropTypes } from '../../lib';

class ButtonGroup extends React.Component {
  static meta = {
    name: 'ButtonGroup',
    ukClass: 'uk-button-group',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      ButtonGroup.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
      >
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
