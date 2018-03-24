import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getOptionsString } from '../../../lib';
import Base from '../../base';
import CoverContainer from './CoverContainer';

export default class Cover extends React.Component {
  static displayName = 'Cover';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img', 'video', 'iframe'),
    automute: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
    automute: false,
  };

  static Container = CoverContainer;

  render() {
    const { automute, ...rest } = this.props;
    return (
      <Base
        {...rest}
        component={Cover}
        data-uk-cover={getOptionsString({ automute })}
      />
    );
  }
}
