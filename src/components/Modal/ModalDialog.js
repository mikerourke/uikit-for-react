import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes, hasChildType } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import ModalBody from './ModalBody';

export default class ModalDialog extends React.Component {
  static displayName = 'ModalDialog';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    body: PropTypes.bool,
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        if (props.body && hasChildType(props.children, ModalBody)) {
          return new Error(
            'You cannot set body to true if you have a ModalBody ' +
              'child in ModalDialog.',
          );
        }
        return null;
      },
    ]),
    toggle: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    body: false,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    if (isNil(this.props.toggle)) return;

    const dialogHtml = renderToStaticMarkup(this.props.children);
    UIkit.util.on(this.ref, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.dialog(dialogHtml);
    });
  }

  handleRef = element => (this.ref = element);

  render() {
    const { body, className, toggle, ...rest } = this.props;

    if (!isNil(toggle)) {
      return <Ref innerRef={this.handleRef}>{this.props.toggle}</Ref>;
    }

    const classes = classnames(className, 'uk-modal-dialog', {
      'uk-modal-body': body,
    });

    return <Base {...rest} className={classes} component={ModalDialog} />;
  }
}
