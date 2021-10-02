import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Column, Size, Space, ButtonStyle, Center} from '../components/styles/common/common';
import {Text} from '../components/atoms/bone/text';
import {
  TypingAnimation, 
  ButtonHoverAnimation,
} from '../components/styles/animation/animation';

function home(){

  return (
    <Size height="100vh">
          <Column align="center" justify="center">
            <Text size="1" content="당신을 위한 기적"/>
            <Space margin="1">
              <TypingAnimation>
              <Text size="1.8" content="미라클 노트."/>
              </TypingAnimation>
            </Space>
            <Size height="1.5em" width="3em">
              <Link to='/write/read'>
                <ButtonHoverAnimation>
                  <ButtonStyle border="none">
                    <Center>
                      <Text size="1" content="시작"/>
                    </Center>
                  </ButtonStyle>
                </ButtonHoverAnimation>
              </Link>
            </Size>
            <Space margin="0.5">
              <Text size="0.8" content="@created by 다빈치"/>
            </Space>
          </Column>
        </Size>
  );
}
export default home;