import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Upload from '../components/Upload';
import Container from '../components/Container';

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
