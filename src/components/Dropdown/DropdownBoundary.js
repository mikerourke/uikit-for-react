import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, HTML, generateSelector } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

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
    this.ref = null;
    this.selector = generateSelector();
  }

  componentDidMount() {
    const dropdowns = this.ref.querySelectorAll('[uk-dropdown]');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement =>
        dropdownElement.setAttribute('boundary', `.${this.selector}`),
      );
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, this.selector);

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={DropdownBoundary} />
      </Ref>
    );
  }
}
