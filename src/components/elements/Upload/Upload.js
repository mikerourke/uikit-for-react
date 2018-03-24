/* eslint-disable react/forbid-prop-types */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import isNil from 'lodash/isNil';
import omit from 'lodash/omit';
import noop from 'lodash/noop';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  HTML,
} from '../../../lib';
import Base from '../../base';
import UploadFileSelect from './UploadFileSelect';

export default class Upload extends React.Component {
  static displayName = 'Upload';

  static propTypes = {
    ...Base.propTypes,
    abort: PropTypes.func,
    allow: PropTypes.string,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    beforeAll: PropTypes.func,
    beforeSend: PropTypes.func,
    children: PropTypes.node,
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

  static propNames = [
    'abort',
    'allow',
    'beforeAll',
    'beforeSend',
    'clsDragover',
    'complete',
    'completeAll',
    'concurrent',
    'dataType',
    'error',
    'fail',
    'load',
    'loadEnd',
    'loadStart',
    'mime',
    'msgInvalidMime',
    'msgInvalidName',
    'multiple',
    'name',
    'onUpload',
    'params',
    'progress',
    'requestType',
    'url',
  ];

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    clsDragover: 'uk-dragover',
    concurrent: 1,
    name: '',
    onUpload: noop,
    requestType: 'POST',
    url: '',
  };

  static FileSelect = UploadFileSelect;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput && this.props.multiple) {
      fileInput.setAttribute('multiple', '');
    }
    const uploadOptions = Upload.propNames.reduce((acc, propName) => {
      const optionKey =
        propName === 'requestType' ? 'type' : kebabCase(propName);
      return {
        ...acc,
        [optionKey]: this.props[propName],
      };
    }, {});
    UIkit.upload(this.getRef(), uploadOptions);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const { className, ...rest } = this.props;
    const elementProps = omit(rest, Upload.propNames);
    const classes = classnames(className, 'uk-upload', this.selector);
    return (
      <Base
        {...elementProps}
        baseRef={this.handleRef}
        className={classes}
        component={Upload}
      />
    );
  }
}
