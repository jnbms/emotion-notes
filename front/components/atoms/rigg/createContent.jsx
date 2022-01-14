import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonHoverTransition } from '../../styles/animation/animation';
import { ButtonStyle, Size, Space } from '../../styles/common/common';
import { Text } from '../bone/text';

function CreateContent(){

    return <Size>
    <Link to="/write/create/9">
    <ButtonHoverTransition>
        <ButtonStyle border="dashed">
            <Space padding="0.5">
            <Text content="작성하기 (+)"/>
            </Space>
        </ButtonStyle>
    </ButtonHoverTransition>
    </Link>
    </Size>
}
export default CreateContent;