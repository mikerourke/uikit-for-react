import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, LibraryComponent, HTML } from '../../../lib';
import Base from '../../base';

export default class DropdownBoundary extends React.Component {
  static displayName = 'DropdownBoundary';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('dropdown-boundary');
  }

  componentDidMount() {
    const dropdowns = LibraryComponent.findAllWithName('dropdown');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement =>
        dropdownElement.setAttribute('boundary', this.libComp.cssSelector),
      );
    }
  }

  render() {
    return (
      <Base
        {...this.props}
        component={DropdownBoundary}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
