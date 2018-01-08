import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ArticleTitle extends React.Component {
  static meta = {
    name: 'ArticleTitle',
    ukClass: 'uk-article-title',
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
      ArticleTitle.meta.ukClass,
    );

    return (
      <h1
        {...rest}
        className={classes || undefined}
      >
        {children}
      </h1>
    );
  }
}

export default ArticleTitle;
