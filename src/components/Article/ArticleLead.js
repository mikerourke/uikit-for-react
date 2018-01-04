import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ArticleLead extends React.Component {
  static meta = {
    name: 'ArticleLead',
    ukClass: 'uk-text-lead',
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
      ArticleLead.meta.ukClass,
    );

    return (
      <p
        {...rest}
        className={classes}
      >
        {children}
      </p>
    );
  }
}

export default ArticleLead;
