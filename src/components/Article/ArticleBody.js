import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class ArticleBody extends React.Component {
  static meta = {
    name: 'ArticleBody',
  };

  static propTypes = {
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'p',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      ArticleBody.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(ArticleBody, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default ArticleBody;
