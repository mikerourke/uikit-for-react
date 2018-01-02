import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Root from '../Root';

class ButtonGroup extends Root {
  static meta = {
    name: 'ButtonGroup',
    ukClass: 'uk-button-group',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      ButtonGroup.meta.ukClass,
      this.getRootClassNames(),
    );

    return (
      <div
        {...this.getValidProps(rest)}
        className={classes}
      >
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
