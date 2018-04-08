import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Button, Upload } from '../../src/components';

Upload.displayName = 'Upload';

storiesOf('Upload', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Upload multiple>
      <Upload.FileSelect>
        <Button>Test</Button>
      </Upload.FileSelect>
    </Upload>
  </Block>
));
