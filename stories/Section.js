import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Card,
  Container,
  Division,
  Grid,
  Panel,
  Section,
} from '../src/components';
import { imageLinks, loremSentence } from './common';

Section.displayName = 'Section';

const SharedContainer = ({ title }) => (
  <Container>
    <h3>{title}</h3>
    <Grid childWidth={{ atMd: '1/3' }} matchHeight>
      <Grid.Cell>
        <p>{loremSentence}</p>
      </Grid.Cell>
      <Grid.Cell>
        <p>{loremSentence}</p>
      </Grid.Cell>
      <Grid.Cell>
        <p>{loremSentence}</p>
      </Grid.Cell>
    </Grid>
  </Container>
);

storiesOf('Section', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Section muted>
        <SharedContainer title="Section" />
      </Section>
    </Division>
  ))

  .add('Style modifiers', () => (
    <Division margin={{ all: 'large' }}>
      <Section>
        <SharedContainer title="Section Default" />
      </Section>
      <Section muted>
        <SharedContainer title="Section Muted" />
      </Section>
      <Section primary inverse="light">
        <SharedContainer title="Section Primary" />
      </Section>
      <Section secondary inverse="light">
        <SharedContainer title="Section Secondary" />
      </Section>
      <Section>
        <Section
          background={{ cover: true, imageUrl: imageLinks.dark }}
          inverse="light"
        >
          <SharedContainer title="Section with Images" />
        </Section>
      </Section>
    </Division>
  ))

  .add('Preserve color', () => (
    <Division margin={{ all: 'large' }}>
      <Section primary preserveColor>
        <Container>
          <Panel inverse="light" margin="medium">
            <h3>Section Primary with cards</h3>
          </Panel>
          <Grid childWidth={{ atMd: 'expand' }} matchHeight>
            <Grid.Cell>
              <Card>
                <p>{loremSentence}</p>
              </Card>
            </Grid.Cell>
            <Grid.Cell>
              <Card>
                <p>{loremSentence}</p>
              </Card>
            </Grid.Cell>
          </Grid>
        </Container>
      </Section>
    </Division>
  ))

  .add('Size modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Section padding="large" muted>
        <Container>
          <h3>Section Primary with cards</h3>
          <Grid childWidth={{ atMd: '1/3' }}>
            <Grid.Cell>
              <p>{loremSentence}</p>
            </Grid.Cell>
            <Grid.Cell>
              <p>{loremSentence}</p>
            </Grid.Cell>
            <Grid.Cell>
              <p>{loremSentence}</p>
            </Grid.Cell>
          </Grid>
        </Container>
      </Section>
    </Division>
  ));
