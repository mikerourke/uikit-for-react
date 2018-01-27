import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/elements/Button';
import Upload from '../components/elements/Upload';
import Container from '../components/layout/Container';

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
