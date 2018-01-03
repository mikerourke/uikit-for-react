import React from 'react';
import PropTypes from 'prop-types';
import { get, keys, omit } from 'lodash';
import {
  sharedPropTypes,
  getSharedClassNames,
  getSharedAttributes,
} from '../props';

const getStyle = Symbol('getStyle');
const getAttributes = Symbol('getAttributes');

class Root extends React.Component {
  static propTypes = sharedPropTypes;

  getRootClassNames(options = { exclude: '', include: '' }) {
    return getSharedClassNames(this.props, options);
  }

  [getStyle]() {
    const imageUrl = get(this.props, ['background', 'imageUrl'], '');
    const currentStyle = get(this.props, 'style', {});
    return (imageUrl !== '')
      ? { ...currentStyle, backgroundImage: `url(${imageUrl})` }
      : { ...currentStyle };
  }

  [getAttributes]() {
    return getSharedAttributes(this.props)
  }

  getValidProps(currentProps) {
    console.log(Root.propTypes);
    const style = this[getStyle]();
    const attributes = this[getAttributes]();
    const omittedPropNames = keys(Root.propTypes);
    const validProps = omit(currentProps, omittedPropNames);
    return {
      ...validProps,
      ...attributes,
      style,
    };
  }
}

export default Root;
