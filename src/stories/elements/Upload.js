import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Base, Upload } from '../../components';

Upload.displayName = 'Upload';

storiesOf('Upload', module).add('Usage', () => (
  <Base margin={{ all: 'large' }}>
    <Upload multiple>
      <Upload.FileSelect>
        <Button>Test</Button>
      </Upload.FileSelect>
    </Upload>
  </Base>
));
