import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getOptionsString } from '../../lib';
import Base from '../Base';
import CoverContainer from './CoverContainer';

export default class Cover extends React.Component {
  static displayName = 'Cover';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img', 'video', 'iframe'),
    automute: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  static Container = CoverContainer;

  render() {
    const { automute, ...rest } = this.props;

    return (
      <Base
        {...rest}
        component={Cover}
        uk-cover={getOptionsString({ automute })}
      />
    );
  }
}
