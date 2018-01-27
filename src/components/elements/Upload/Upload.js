/* eslint-disable react/forbid-prop-types */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, kebabCase, noop, omit } from 'lodash';
import { BlockElement } from '../../base/index';
import UploadFileSelect from './UploadFileSelect';

export default class Upload extends React.Component {
  static displayName = 'Upload';

  static propTypes = {
    ...BlockElement.propTypes,
    abort: PropTypes.func,
    allow: PropTypes.string,
    as: BlockElement.asPropType,
    beforeAll: PropTypes.func,
    beforeSend: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    clsDragover: PropTypes.string,
    complete: PropTypes.func,
    completeAll: PropTypes.func,
    concurrent: PropTypes.number,
    dataType: PropTypes.oneOf(['html', 'json', 'script', 'xml']),
    error: PropTypes.func,
    fail: PropTypes.func,
    load: PropTypes.func,
    loadEnd: PropTypes.func,
    loadStart: PropTypes.func,
    mime: PropTypes.string,
    msgInvalidMime: PropTypes.string,
    msgInvalidName: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    onUpload: PropTypes.func,
    params: PropTypes.object,
    progress: PropTypes.func,
    requestType: PropTypes.oneOf(['POST', 'PUT']),
    url: PropTypes.string,
  };

  static defaultUploadProps = {
    abort: null,
    allow: null,
    beforeAll: null,
    beforeSend: null,
    clsDragover: 'uk-dragover',
    complete: null,
    completeAll: null,
    concurrent: 1,
    dataType: null,
    error: null,
    fail: null,
    load: null,
    loadEnd: null,
    loadStart: null,
    mime: null,
    msgInvalidMime: null,
    msgInvalidName: null,
    multiple: false,
    name: '',
    onUpload: noop,
    params: null,
    progress: null,
    requestType: 'POST',
    url: '',
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    ...Upload.defaultUploadProps,
    as: null,
    children: null,
    className: null,
  };

  static FileSelect = UploadFileSelect;

  componentDidMount() {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput && this.props.multiple) {
      fileInput.setAttribute('multiple', '');
    }
    if (!this.ref) return;
    const uploadOptions = Object.keys(Upload.defaultUploadProps).reduce(
      (acc, propName) => {
        const optionKey =
          propName === 'requestType' ? 'type' : kebabCase(propName);
        return {
          ...acc,
          [optionKey]: this.props[propName],
        };
      },
      {},
    );
    UIkit.upload(this.ref, uploadOptions);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const { className, ...rest } = this.props;
    const blockProps = omit(rest, Object.keys(Upload.defaultUploadProps));
    const classes = classnames(className, 'uk-upload');
    return (
      <BlockElement
        {...blockProps}
        className={classes || undefined}
        ref={this.handleRef}
      />
    );
  }
}
