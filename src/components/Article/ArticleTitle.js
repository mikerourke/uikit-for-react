import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Root from '../Root';

class ArticleTitle extends Root {
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
      this.getRootClassNames(),
    );

    return (
      <h1
        {...this.getValidProps(rest)}
        className={classes}
      >
        {children}
      </h1>
    );
  }
}

export default ArticleTitle;
