import React from 'react';
import {Link} from 'react-router-dom';
import {Column, Size, ButtonStyle, Center, Space} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import { 
    ButtonHoverAnimation,
    ButtonHoverTransition,
    TextHoverColor,
  } from '../../components/styles/animation/animation';
  
function Menu() {

  // useToggle
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => { modal == true ? setModal(false) : setModal(true);};
  
  return (
    <Size height="100vh">
      <Center>
        <Size height="100%" width="40%"> 
         <Column justify="center" align="center" gap="1">

          <Text content="목록"/>

            <Size height="15%" width="100%">
              <Link to="/write/read">
               <ButtonHoverAnimation>
                   <ButtonStyle border="none">
                      <Center>
                        <Text size="1" weight="bold" content="수도꼭지 틀기"/>
                      </Center>
                    </ButtonStyle>
               </ButtonHoverAnimation>
              </Link> 
            </Size>

            <Size height="15%" width="100%">
              <Link to="/menu/create">
               <ButtonHoverTransition>
                   <ButtonStyle border="dashed">
                      <Center>
                       <Text content="(+)"/>
                     </Center>
                   </ButtonStyle>
               </ButtonHoverTransition>
              </Link>
            </Size>

          <Link to="/">
            <TextHoverColor hoverColor="blue">
              <Text size="0.8" content="PREV"/>
            </TextHoverColor>  
          </Link>
          
          {/* <div onClick={toggleModal}>CLICK</div>
      
      {modal? 
      <div className="layer center">
        <div className="bgShadow"></div>
        <div className="modal">
          <Size height="30%" width="30%">
            <Button onClick={toggleModal}>생성</Button>
          </Size>
        </div>
      </div> 
      :""} */}

        </Column>
       </Size>
      </Center>
    </Size>
  );
};

export default Menu;
