import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Block, Upload } from '../../components';

Upload.displayName = 'Upload';

storiesOf('Upload', module).add('Basic Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Upload multiple>
      <Upload.FileSelect>
        <Button>Test</Button>
      </Upload.FileSelect>
    </Upload>
  </Block>
));
