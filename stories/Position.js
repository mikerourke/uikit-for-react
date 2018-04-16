import React from 'react';
import { storiesOf } from '@storybook/react';
import startCase from 'lodash/startCase';
import { Division, Flex, Overlay } from '../src/components';
import { imageLinks } from './common';

const SharedTblrOverlay = ({ position }) => (
  <Overlay.Context inline margin>
    <Overlay.Image src={imageLinks.photo} />
    <Overlay simple position={{ at: 'top', ...position }} textAlign="center">
      Top
    </Overlay>
    <Overlay simple position={{ at: 'bottom', ...position }} textAlign="center">
      Bottom
    </Overlay>
    <Overlay
      simple
      position={{ at: 'left', ...position }}
      textAlign="center"
      flex={{ display: true, alignItems: 'middle' }}
    >
      Left
    </Overlay>
    <Overlay
      simple
      position={{ at: 'right', ...position }}
      textAlign="center"
      flex={{ display: true, alignItems: 'middle' }}
    >
      Right
    </Overlay>
  </Overlay.Context>
);

const SharedModifierSizeBlock = ({ marginSize }) => (
  <Division margin={{ all: 'large' }}>
    <Overlay.Context inline margin>
      <Overlay.Image src={imageLinks.photo} />
      {[
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ].map(position => (
        <Overlay simple position={{ at: position, marginSize }} key={position}>
          {startCase(position)}
        </Overlay>
      ))}
    </Overlay.Context>
    <SharedTblrOverlay position={{ marginSize }} />
    <Overlay.Context inline margin>
      <Overlay.Image src={imageLinks.photo} />
      <Overlay
        as={Flex}
        simple
        position={{ cover: true, marginSize }}
        inline
        alignItems="middle"
        justifyContent="center"
      >
        Cover
      </Overlay>
    </Overlay.Context>
    <Overlay.Context inline>
      <Overlay.Image src={imageLinks.photo} />
      <Overlay primary position={{ outside: 'left', marginSize }} visible="@s">
        Out
      </Overlay>
      <Overlay primary position={{ outside: 'right', marginSize }} visible="@s">
        Out
      </Overlay>
    </Overlay.Context>
  </Division>
);

storiesOf('Position', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <SharedTblrOverlay />
    </Division>
  ))

  .add('X and Y directions', () => (
    <Division margin={{ all: 'large' }}>
      <Overlay.Context inline margin>
        <Overlay.Image src={imageLinks.photo} />
        {[
          'top-left',
          'top-center',
          'top-right',
          'center-left',
          'center',
          'center-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ].map(position => (
          <Overlay simple position={position} textAlign="center" key={position}>
            {startCase(position)}
          </Overlay>
        ))}
      </Overlay.Context>
    </Division>
  ))

  .add('Cover', () => (
    <Division margin={{ all: 'large' }}>
      <Overlay.Context inline margin>
        <Overlay.Image src={imageLinks.photo} />
        <Overlay
          as={Flex}
          simple
          position="cover"
          inline
          alignItems="middle"
          justifyContent="center"
        >
          Cover
        </Overlay>
      </Overlay.Context>
    </Division>
  ))

  .add('Outside', () => (
    <Division margin={{ all: 'large' }}>
      <Overlay.Context inline>
        <Overlay.Image src={imageLinks.photo} />
        <Overlay primary position={{ outside: 'left' }} visible="@s">
          Out
        </Overlay>
        <Overlay primary position={{ outside: 'right' }} visible="@s">
          Out
        </Overlay>
      </Overlay.Context>
    </Division>
  ))

  .add('Small modifier', () => <SharedModifierSizeBlock marginSize="small" />)
  .add('Medium modifier', () => <SharedModifierSizeBlock marginSize="medium" />)
  .add('Large modifier', () => <SharedModifierSizeBlock marginSize="large" />);
