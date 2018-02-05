import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion, Block } from '../../components';

Accordion.displayName = 'Accordion';

const firstParagraph = <p>{faker.lorem.paragraph()}</p>;
const secondParagraph = <p>{faker.lorem.paragraph()}</p>;
const thirdParagraph = <p>{faker.lorem.paragraph()}</p>;

storiesOf('Accordion', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('No collapsing', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible={false}>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('Multiple open items', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible multiple>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('Set open items', () => (
    // TODO: Add checkboxes to demonstrate functionality.
    <Block margin={{ all: 'large' }}>
      <Accordion multiple openIndex={[0, 2]}>
        <Accordion.Panel open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion
        collapsible
        onBeforeHide={action('onBeforeHide')}
        onBeforeShow={action('onBeforeShow')}
        onHidden={action('onHidden')}
        onHide={action('onHide')}
        onShow={action('onShow')}
        onShown={action('onShown')}
      >
        <Accordion.Panel open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ));
