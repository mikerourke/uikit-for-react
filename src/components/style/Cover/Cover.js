import React from 'react';
import PropTypes from 'prop-types';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
} from '../../../lib';
import CoverContainer from './CoverContainer';

export default class Cover extends React.Component {
  static displayName = 'Cover';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img', 'video', 'iframe'),
    automute: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'img',
    automute: false,
    className: '',
  };

  static Container = CoverContainer;

  render() {
    const { as, automute, ...rest } = this.props;
    const componentOptions = getOptionsString({ automute });
    const Element = getElementType(Cover, this.props);
    return <Element {...rest} data-uk-cover={componentOptions} />;
  }
}
