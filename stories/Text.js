import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Card, Grid, Text } from '../src/components';

Text.displayName = 'Text';

storiesOf('Text', module)
  .add('Style modifiers', () => (
    <Division margin={{ all: 'large' }}>
      <Grid gutter="small">
        <Grid.Cell>
          <Text lead>
            Add this class to highlight text, for example in article subtitles.
          </Text>
        </Grid.Cell>
        <Grid.Cell>
          <Text meta>
            Add this class to a paragraph which contains meta data about an
            article or similar.
          </Text>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Font size', () => (
    <Division margin={{ all: 'large' }}>
      <Text small>Add this class to decrease the font size.</Text>
      <Text large>Add this class to increase the font size.</Text>
    </Division>
  ))

  .add('Font weight', () => (
    <Division margin={{ all: 'large' }}>
      Add the bold prop to create <Text bold>bold text</Text>
    </Division>
  ))

  .add('Text transform', () => (
    <Division margin={{ all: 'large' }}>
      <Text transform="uppercase">
        Add this class to transform your text to uppercase.
      </Text>
      <Text transform="capitalize">
        Add this class to transform your text to capitalize.
      </Text>
      <Text transform="lowercase">
        Add this class to transform your text to lowercase.
      </Text>
    </Division>
  ))

  .add('Text color', () => (
    <Division margin={{ all: 'large' }}>
      <Text muted>Add this class to mute your text.</Text>
      <Text primary>
        Add this class to emphasize additional text information.
      </Text>
      <Text success>Add this class to indicate success.</Text>
      <Text warning>Add this class to indicate a warning.</Text>
      <Text danger>Add this class to indicate danger.</Text>
    </Division>
  ))

  .add('Text background', () => (
    <Division margin={{ all: 'large' }}>
      <Text>Add background</Text>
    </Division>
  ))

  .add('Text alignment', () => (
    <Division margin={{ all: 'large' }}>
      <Text align="left">Aligns text to the left.</Text>
      <Text align="right">Aligns text to the right.</Text>
      <Text align="center">Centers text horizontally.</Text>
      <Text align="justify">Justifies text.</Text>
    </Division>
  ))

  .add('Responsive', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/3' }} gutter="small">
        {['left', 'right', 'center'].map(textAlign => (
          <Grid.Cell key={textAlign}>
            <Card size="small">
              <Card.Body textAlign={{ atSm: textAlign }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.<br />
                <code>{`textAlign={{ atSm: '${textAlign}' }}`}</code>
              </Card.Body>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </Division>
  ));
