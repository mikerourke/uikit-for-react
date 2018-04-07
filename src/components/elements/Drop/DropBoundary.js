import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, LibraryComponent, HTML } from '../../../lib';
import Base from '../../base';

export default class DropBoundary extends React.Component {
  static displayName = 'DropBoundary';

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
    this.libComp = new LibraryComponent('drop-boundary');
  }

  componentDidMount() {
    const drops = LibraryComponent.findAllWithName('drop');
    if (drops.length !== 0) {
      drops.forEach(dropElement =>
        dropElement.setAttribute('boundary', this.libComp.cssSelector),
      );
    }
  }

  render() {
    return (
      <Base
        {...this.props}
        component={DropBoundary}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
