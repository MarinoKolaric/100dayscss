import React from 'react';
import styled, { css } from 'styled-components';
import {
  FaSearch,
  FaUser,
  FaBell,
  FaComment,
  FaWrench,
  FaSlidersH,
  FaThLarge,
} from 'react-icons/fa';
import { Box } from '@components';
import { theme } from '@style';
//Date: 20-24.9.2020

const data = [
  {
    time: '10:32 am',
    person: 'Jessica Alba',
    action: 'posted a photo on your wall.',
  },
  {
    time: '8:11 am',
    person: 'Elon Musk',
    action: 'commented your last post.',
  },
  {
    time: 'Yesterday',
    person: 'Emma Stone',
    action: 'likes your photo.',
  },
];

const menuItems = [
  {
    icon: FaThLarge,
    text: 'Dashboard',
  },
  {
    icon: FaUser,
    text: 'Profile',
  },
  {
    icon: FaBell,
    text: 'Notifications',
  },
  {
    icon: FaComment,
    text: 'Messages',
  },
  {
    icon: FaWrench,
    text: 'Settings',
  },
];

const Container = styled.div`
  align-items: center;
  ${theme.boxShadow}
  background: ${theme.color.day6Background};
  color: ${theme.color.day6Text};
  display: flex;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const Frame = styled.div`
  box-shadow: ${theme.boxShadow};
  display: flex;
  flex-direction: column;
  height: 300px;
  position: relative;
  width: 300px;
`;

const Main = styled.div<{ openMenu: boolean }>`
  border-radius: 4px;
  overflow: hidden;
  transform: ${props => props.openMenu && 'translateX(120px) '};
  transition: 0.4s transform ease-in-out;
  z-index: 2;
`;

const Header = styled.div<{ openSearch: boolean; openMenu: boolean }>`
  align-items: center;
  background-color: ${theme.color.day6Blue};
  color: ${theme.color.main};
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: relative;

  > svg {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s all;

    ${props =>
      props.openSearch &&
      css`
        :last-of-type {
          opacity: 1;
        }
      `}

    ${props =>
      props.openMenu &&
      css`
        :first-of-type {
          opacity: 1;
        }
      `}

    &:hover {
      opacity: 1;
    }
  }

  > span {
    font-size: ${theme.fontSize.sm};
    font-weight: 600;
  }
`;

const Body = styled.div`
  background-color: ${theme.color.main};
  overflow-y: auto;
`;

const Notification = styled.div`
  cursor: pointer;
  display: flex;

  &:hover > div {
    color: ${theme.color.day6Blue};
  }

  &:hover > div > p > div > div {
    border: 4px solid ${theme.color.day6Blue};
    transition: .2s all;
  }
`;

const VerticalLine = styled.div`
  background-color: ${theme.color.day6Line};
  height: auto;
  margin-left: 16px;
  width: 4px;
`;

const MessageBody = styled.div`
  color: ${theme.color.day6Text};
  padding: 16px 12px;
`;

const TimeLabel = styled.p`
  font-size: ${theme.fontSize.xxs};
  margin-bottom: 2px;
  position: relative;
  text-transform: uppercase;
  transition: 0.3s color;
`;

const DotWrapper = styled.div`
  align-items: center;
  background: ${theme.color.main};
  display: flex;
  height: 16px;
  justify-content: center;
  left: -21.2px;
  position: absolute;
  top: -1px;
  width: 16px;
`;
const Dot = styled.div`
  border: 2px solid ${theme.color.day6Blue};
  border-radius: 50%;
  height: 12px;
  width: 12px;
`;

const MessageText = styled.p`
  font-size: ${theme.fontSize.sm};
  transition: 0.3s color;

  > span {
    font-weight: 600;
  }
`;

const SearchInput = styled.input<{ openSearch: boolean }>`
  border: 0;
  border-radius: 12px;
  left: 50%;
  margin-left: -92px;
  opacity: 0;
  outline: none;
  padding: 6px;
  position: absolute;
  transform: translateX(16px);
  transition: 0.3s all ease-in-out;
  width: 184px;

  ${props =>
    props.openSearch &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const Menu = styled.div<{ openMenu: boolean }>`
  background-color: ${theme.color.day6BlueDark};
  border-radius: 4px;
  bottom: 12px;
  color: ${theme.color.day6TextDark};
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.xs};
  justify-content: space-around;
  ${theme.boxShadow};
  padding: 16px 0;
  position: absolute;
  top: 12px;
  transform: ${props => props.openMenu && 'translateX(-12px)'};
  transform: ${props =>
    props.openMenu &&
    'translateX(-12px) matrix3d(1, 0, 0, 0.0007, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'};
  transition: 0.3s all ease-in-out;
  width: 140px;

  > div {
    &:hover {
      background-color: ${theme.color.day6Background};
      color: ${theme.color.day6Line};
    }
  }
`;

const MenuItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 16px 12px;

  > p {
    padding-left: 8px;
  }
`;

export const Day6 = () => {
  const [toggleSearch, setToggleSearch] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Box title="Day 6" link="day6" componentName="Day6">
      <Container>
        <Frame>
          <Menu openMenu={toggleMenu}>
            {menuItems.map((item, i) => (
              <MenuItem key={i}>
                <item.icon />
                <p>{item.text}</p>
              </MenuItem>
            ))}
          </Menu>
          <Main openMenu={toggleMenu}>
            <Header openSearch={toggleSearch} openMenu={toggleMenu}>
              <FaSlidersH onClick={() => setToggleMenu(!toggleMenu)} />
              <span>Notifications</span>
              <SearchInput placeholder="Search..." openSearch={toggleSearch} />
              <FaSearch onClick={() => setToggleSearch(!toggleSearch)} />
            </Header>
            <Body>
              {data.map(notification => (
                <Notification>
                  <VerticalLine />
                  <MessageBody>
                    <TimeLabel>
                      <DotWrapper>
                        <Dot />
                      </DotWrapper>
                      {notification.time}
                    </TimeLabel>
                    <MessageText>
                      <span>{notification.person}</span> {notification.action}
                    </MessageText>
                  </MessageBody>
                </Notification>
              ))}
            </Body>
          </Main>
        </Frame>
      </Container>
    </Box>
  );
};
