import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import { Panel, Header } from '@enact/moonstone/Panels';
import Input from '@enact/moonstone/Input';
import BodyText from '@enact/moonstone/BodyText';
import Divider from '@enact/moonstone/Divider';
import React from 'react';


const OTP = kind({
  name: 'OTP',
  propTypes: {
    title: PropTypes.string,
    onClick: PropTypes.func
  },
  render: ({ title, onClick, ...rest }) => {

    return (
      <Panel {...rest}>
        <Header>
          <title>OTP page</title>
          <headerInput>
            <Input dismissOnEnter />
          </headerInput>
          <titleBelow>The Adventure Continues</titleBelow>
          <subTitleBelow>The rebels face attack by imperial forces on the ice planet</subTitleBelow>
        </Header>

        <BodyText centered>Hello Enact!</BodyText>

        <Divider
          casing="preserve"
          spacing="medium"
        >
          A group of related components
				</Divider>
        <Button onClick={onClick}>I keep saying No o</Button>
      </Panel>
    )
  }
});

export default OTP;
