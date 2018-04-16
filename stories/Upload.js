import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Button, Upload } from '../src/components';

Upload.displayName = 'Upload';

storiesOf('Upload', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Upload multiple>
      <Upload.FileSelect>
        <Button>Test</Button>
      </Upload.FileSelect>
    </Upload>
  </Division>
));
