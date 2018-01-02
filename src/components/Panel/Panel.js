import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Root from '../Root';
import { buildClassName } from '../../lib';

class Panel extends Root {
  static meta = {
    name: 'Panel',
    ukClass: 'uk-panel',
  };

  static propTypes = {
    /** Contents to display in the component. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Indicates if the panel is scrollable. */
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    scrollable: false,
  };

  render() {
    const {
      children,
      className,
      scrollable,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Panel.meta.ukClass,
      buildClassName('panel', scrollable),
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

export default Panel;
