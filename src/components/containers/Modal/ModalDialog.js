import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes, hasChildType, LibraryComponent } from '../../../lib';
import Base from '../../base';
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
    this.libComp = new LibraryComponent('modal-dialog');
    this.modal = null;
  }

  componentDidMount() {
    if (isNil(this.props.toggle)) return;

    const dialogHtml = renderToStaticMarkup(this.props.children);
    UIkit.util.on(this.libComp.cssSelector, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.dialog(dialogHtml);
    });
  }

  render() {
    const { body, className, toggle, ...rest } = this.props;

    if (!isNil(toggle))
      return (
        <span {...this.libComp.appendProps(this.props)}>
          {this.props.toggle}
        </span>
      );

    const classes = classnames(className, 'uk-modal-dialog', {
      'uk-modal-body': body,
    });

    return <Base {...rest} className={classes} component={ModalDialog} />;
  }
}
