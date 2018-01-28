import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Container, Upload } from '../../components';

Upload.displayName = 'Upload';

storiesOf('Upload', module).add('Basic Usage', () => (
  <Container margin={{ all: 'large' }}>
    <Upload multiple>
      <Upload.FileSelect>
        <Button>Test</Button>
      </Upload.FileSelect>
    </Upload>
  </Container>
));
