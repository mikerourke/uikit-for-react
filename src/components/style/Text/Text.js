import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import textProps from '../../common/Text';

export default class Text extends React.Component {
  static displayName = 'Text';

  static propTypes = {
    ...textProps.propShape,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, textProps.getClasses(rest));
    const elementProps = omit(rest, Object.keys(textProps.propShape));
    const Element = getElementType(Text, as);
    return <Element {...elementProps} className={classes || undefined} />;
  }
}
