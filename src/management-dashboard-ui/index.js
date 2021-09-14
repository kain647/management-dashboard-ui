import React, { useState } from "react";
import { AiOutlinePicCenter } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosAddCircle, IoMdMore } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { HiHome, HiLink, HiCalendar } from "react-icons/hi";
import { FiSettings, FiList, FiGrid } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import {
  Container,
  Header,
  HeaderLeft,
  AppName,
  AppIcon,
  HeaderRight,
  SearchContainer,
  Content,
  Sidebar,
  Projects,
  Messages,
  MHeader,
  PHeader,
  PName,
  PDate,
  MsgContainer,
  MsgName,
  MsgAvatar,
  MsgIcon,
  MsgMessage,
  MsgDate,
  MsgContent,
  MsgNameContainer,
  ProjectsSection,
  ProjectsStatus,
  ViewActions,
  StatusContainer,
  StatusNumber,
  StatusType,
  ProjectBoxes,
  BoxContainer,
  BoxDate,
  DateContainer,
  BoxContainerHeader,
  BoxHeader,
  BoxSubHeader,
  BoxProgress,
  TitleProgress,
  Progress,
  BoxProgressPercentage,
  Line
} from "./styled";

const message = [
  {
    avatar: <img src={`images/Stephanie.jpg`} />,
    name: "Stephanie",
    icon: <FaRegStar />,
    message:
      "I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.",
    date: "Nov, 28",
  },
  {
    avatar: <img src={`images/Mark.jpg`} />,
    name: "Mark",
    icon: <FaRegStar />,
    message:
      "Hey, can tell me about progress of project? I'm waiting for your response.",
    date: "Nov, 28",
  },
  {
    avatar: <img src={`images/David.jpg`} />,
    name: "David",
    icon: <FaRegStar />,
    message:
      "Awesome! 🤩 I like it. We can schedule a meeting for the next one.",
    date: "Nov, 28",
  },
  {
    avatar: <img src={`images/Jessica.jpg`} />,
    name: "Jessica",
    icon: <FaRegStar />,
    message: "I am really impressed! Can't wait to see the final result.",
    date: "Nov, 28",
  },
];
const status = [
  {
    statusNumber: "45",
    statusType: "In Progress",
  },
  {
    statusNumber: "24",
    statusType: "Upcoming",
  },
  {
    statusNumber: "62",
    statusType: "Total Projects",
  },
];
const boxes = [
  {
    header: `Web Designing`,
    background: "#fee4cb",
    bgProgress: "#ff942e",
    date: `December 10, 2021`,
    percent: `18%`,
  },
  {
    header: `Testing`,
    background: "#e9e7fd",
    bgProgress: "#4f3ff0",
    date: `December 10, 2021`,
    percent: `50%`,
  },
  {
    header: `Svg Animations`,
    background: "#dbf6fd",
    bgProgress: "#096c86",
    date: `December 10, 2021`,
    percent: `80%`,
  },
  {
    header: `UI Development`,
    background: "#ffd3e2",
    bgProgress: "#df3670",
    date: `December 10, 2021`,
    percent: `20%`,
  },
  {
    header: `Data Analysis`,
    background: "#c8f7dc",
    bgProgress: "#34c471",
    date: `December 10, 2021`,
    percent: `90%`,
  },
  {
    header: `UI-UX Designing`,
    background: "#d5deff",
    bgProgress: "#4067f9",
    date: `December 10, 2021`,
    percent: `10%`,
  },
];
const Dashboard = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <AppIcon>
            <AiOutlinePicCenter />
          </AppIcon>
          <AppName>Portfolio</AppName>
          <SearchContainer>
            <input placeholder={"Search"} />
            <FiSearch />
          </SearchContainer>
        </HeaderLeft>
        <HeaderRight>
          <IoMoonOutline />
          <IoIosAddCircle />
          <BiBell />
        </HeaderRight>
      </Header>
      <Content>
        <Sidebar>
          <HiHome />
          <HiLink />
          <HiCalendar />
          <FiSettings />
        </Sidebar>
        <Messages>
          <MHeader>Client Messages</MHeader>
          {message.map((msg) => {
            return <Msg {...msg} />;
          })}
        </Messages>
        <Projects>
          <PHeader>
            <PName>Projects</PName>
            <PDate>November, 28</PDate>
          </PHeader>
          <ProjectsSection>
            <ProjectsStatus>
              {status.map((statusProjects) => {
                return <StatusProjects {...statusProjects} />;
              })}
            </ProjectsStatus>
            <ViewActions>
              <FiList />
              <FiGrid />
            </ViewActions>
          </ProjectsSection>
          <ProjectBoxes>
            {boxes.map((box) => {
              return <Box {...box} />;
            })}
          </ProjectBoxes>
        </Projects>
      </Content>
    </Container>
  );
};
const Msg = (props) => {
  const { avatar, name, icon, message, date } = props;
  return (
    <MsgContainer>
      <MsgAvatar>{avatar}</MsgAvatar>
      <MsgContent>
        <MsgNameContainer>
          <MsgName>{name}</MsgName>
          <MsgIcon>{icon}</MsgIcon>
        </MsgNameContainer>
        <MsgMessage>{message}</MsgMessage>
        <MsgDate>{date}</MsgDate>
      </MsgContent>
    </MsgContainer>
  );
};
const StatusProjects = (props) => {
  const { statusNumber, statusType } = props;
  return (
    <StatusContainer>
      <StatusNumber>{statusNumber}</StatusNumber>
      <StatusType>{statusType}</StatusType>
    </StatusContainer>
  );
};
const Box = (props) => {
  const { background, bgProgress, date, percent, header } = props;
  return (
    <BoxContainer background={background}>
      <DateContainer>
        <BoxDate>{date}</BoxDate>
        <IoMdMore />
      </DateContainer>
      <BoxContainerHeader>
        <BoxHeader>{header}</BoxHeader>
        <BoxSubHeader>Prototyping</BoxSubHeader>
      </BoxContainerHeader>
      <BoxProgress>
        <TitleProgress>Progress</TitleProgress>
        <Progress>
          <Line percent={percent} bgProgress={bgProgress}/>
        </Progress>
        <BoxProgressPercentage>{percent}</BoxProgressPercentage>
      </BoxProgress>
    </BoxContainer>
  );
};
export default Dashboard;
