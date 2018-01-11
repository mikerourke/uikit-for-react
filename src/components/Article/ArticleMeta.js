import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ArticleMeta extends React.Component {
  static meta = {
    name: 'ArticleMeta',
    ukClass: 'uk-article-meta',
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
      ArticleMeta.meta.ukClass,
    );

    return (
      <p
        {...rest}
        className={classes || undefined}
      >
        {children}
      </p>
    );
  }
}

export default ArticleMeta;
