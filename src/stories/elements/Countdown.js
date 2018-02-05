import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Countdown, Block, Grid } from '../../components';

Countdown.displayName = 'Countdown';

storiesOf('Countdown', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Countdown
        as={Grid}
        date="2025-01-16T00:00:00+00:00"
        gutter="small"
        childWidth="auto"
      >
        <Grid.Cell>
          <Countdown.Days />
          <Countdown.Label textAlign="center" margin="small" visible="@s">
            Days
          </Countdown.Label>
        </Grid.Cell>
        <Countdown.Separator>:</Countdown.Separator>
        <Grid.Cell>
          <Countdown.Hours />
          <Countdown.Label textAlign="center" margin="small" visible="@s">
            Hours
          </Countdown.Label>
        </Grid.Cell>
        <Countdown.Separator>:</Countdown.Separator>
        <Grid.Cell>
          <Countdown.Minutes />
          <Countdown.Label textAlign="center" margin="small" visible="@s">
            Minutes
          </Countdown.Label>
        </Grid.Cell>
        <Countdown.Separator>:</Countdown.Separator>
        <Grid.Cell>
          <Countdown.Seconds />
          <Countdown.Label textAlign="center" margin="small" visible="@s">
            Seconds
          </Countdown.Label>
        </Grid.Cell>
      </Countdown>
    </Block>
  ))

  .add('Starting and stopping', () => {
    class PausableCountdown extends React.Component {
      state = {
        paused: false,
      };

      handleClick = () => {
        this.setState(state => ({
          paused: !state.paused,
        }));
      };

      render() {
        const buttonLabel = this.state.paused ? 'Continue' : 'Pause';

        return (
          <Block margin={{ all: 'large' }}>
            <Button
              onClick={this.handleClick}
              margin={{ bottom: 'large' }}
              primary={this.state.paused}
              secondary={!this.state.paused}
            >
              {buttonLabel}
            </Button>
            <Countdown
              as={Grid}
              date="2025-01-16T00:00:00+00:00"
              paused={this.state.paused}
              gutter="small"
              childWidth="auto"
            >
              <Grid.Cell>
                <Countdown.Days />
                <Countdown.Label textAlign="center" margin="small" visible="@s">
                  Days
                </Countdown.Label>
              </Grid.Cell>
              <Countdown.Separator>:</Countdown.Separator>
              <Grid.Cell>
                <Countdown.Hours />
                <Countdown.Label textAlign="center" margin="small" visible="@s">
                  Hours
                </Countdown.Label>
              </Grid.Cell>
              <Countdown.Separator>:</Countdown.Separator>
              <Grid.Cell>
                <Countdown.Minutes />
                <Countdown.Label textAlign="center" margin="small" visible="@s">
                  Minutes
                </Countdown.Label>
              </Grid.Cell>
              <Countdown.Separator>:</Countdown.Separator>
              <Grid.Cell>
                <Countdown.Seconds />
                <Countdown.Label textAlign="center" margin="small" visible="@s">
                  Seconds
                </Countdown.Label>
              </Grid.Cell>
            </Countdown>
          </Block>
        );
      }
    }

    return <PausableCountdown />;
  });
