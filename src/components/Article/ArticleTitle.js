import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ArticleTitle extends React.Component {
  static meta = {
    name: 'ArticleTitle',
    ukClass: 'uk-article-title',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
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
