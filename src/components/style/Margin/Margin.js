import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getOptionsString, HTML } from '../../../lib';
import Base from '../../base';

export default class Margin extends React.Component {
  static displayName = 'Margin';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    firstColumn: PropTypes.string,
    nextRow: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { firstColumn, nextRow, ...rest } = this.props;
    return (
      <Base
        {...rest}
        component={Margin}
        uk-margin={getOptionsString({ margin: nextRow, firstColumn })}
      />
    );
  }
}
