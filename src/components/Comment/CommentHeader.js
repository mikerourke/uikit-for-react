import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';

class CommentHeader extends React.Component {
  static meta = {
    name: 'CommentHeader',
    ukClass: 'uk-comment-header',
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
      CommentHeader.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <header
        {...rest}
        className={classes || undefined}
      >
        {children}
      </header>
    );
  }
}

export default CommentHeader;
