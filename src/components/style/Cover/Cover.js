import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';
import CoverContainer from './CoverContainer';

export default class Cover extends React.Component {
  static displayName = 'Cover';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('img', 'video', 'iframe'),
    automute: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'img',
    automute: false,
    className: '',
  };

  static Container = CoverContainer;

  render() {
    const { automute, ...rest } = this.props;
    const componentOptions = getOptionsString({ automute });
    return <BlockElement {...rest} data-uk-cover={componentOptions} />;
  }
}
