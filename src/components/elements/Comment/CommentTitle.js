import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class CommentTitle extends React.Component {
  static displayName = 'CommentTitle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'h4',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-comment-title');

    return <Base {...rest} className={classes} component={CommentTitle} />;
  }
}
