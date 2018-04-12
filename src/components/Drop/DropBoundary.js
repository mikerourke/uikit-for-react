import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, generateSelector, HTML } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

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
    this.ref = null;
    this.selector = generateSelector();
  }

  componentDidMount() {
    const drops = this.ref.querySelectorAll('[uk-drop]');
    if (drops.length !== 0) {
      drops.forEach(dropElement =>
        dropElement.setAttribute('boundary', `.${this.selector}`),
      );
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, this.selector);

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={DropBoundary} />
      </Ref>
    );
  }
}
