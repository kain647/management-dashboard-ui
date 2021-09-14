import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 24px;
`;
export const HeaderLeft = styled.div`
  display: flex;
`;
export const HeaderRight = styled.div`
  display: flex;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    cursor: pointer;
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const AppName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin: 0 32px;
  color: #1f1c2e;
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  input {
    border: none;
    outline: none;
    font-size: 16px;
    width: 480px;
    padding: 10px 40px 10px 20px;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%),
      0 24px 20px -24px rgb(71 82 107 / 10%);
    overflow: hidden;
  }
  svg {
    position: absolute;
    width: var(--size);
    height: var(--size);
    --size: 24px;
    right: 0;
    padding: 10px;
  }
`;
export const AppIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 25px;
  }
`;
export const Content = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-areas: "sidebar messages projects";
  grid-template-columns: 90px 500px 1fr;
  width: 100%;
  height: 800px;
  padding: 20px;
`;
export const Sidebar = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-area: sidebar;
  //background-color: #fff;
  margin-right: 25px;
  border-radius: 15px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    cursor: pointer;
  }
`;
export const Projects = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-area: projects;
  background-color: #fff;
  border-radius: 15px;
  padding: 32px;
  min-width: 500px;
  height: 760px;
`;
export const Messages = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-area: messages;
  background-color: #fff;
  border-radius: 15px;
  margin-right: 25px;
  //padding: 20px;
`;
export const MHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  color: #1f1c2e;
  padding: 25px;
`;
export const PHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-bottom: 24px;
`;
export const PName = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  color: #1f1c2e;
`;
export const PDate = styled.div`
  display: flex;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  margin: 0;
  color: #1f1c2e;
`;
export const MsgContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  border-top: 1px solid #e9ebf0;
  padding: 32px;
  :hover {
    background-color: #fafcff;
  }
`;
export const MsgName = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #1f1c2e;
`;
export const MsgAvatar = styled.div`
  display: flex;
  margin-right: 16px;
  img {
    width: var(--size);
    height: var(--size);
    --size: 40px;
    border-radius: 50px;
  }
`;
export const MsgIcon = styled.div`
  display: flex;
  //color: yellow;
  cursor: pointer;
`;
export const MsgMessage = styled.div`
  display: flex;
`;
export const MsgDate = styled.div`
  display: flex;
  margin-left: auto;
`;
export const MsgContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MsgNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProjectsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  height: 50px;
`;
export const ProjectsStatus = styled.div`
  display: flex;
`;
export const ViewActions = styled.div`
  display: flex;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    margin-right: 10px;
    cursor: pointer;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  :last-child {
    margin-right: 0;
  }
`;
export const StatusNumber = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: #1f1c2e;
`;
export const StatusType = styled.div`
  display: flex;
  color: #4a4a4a;
`;
export const ProjectBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const BoxContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 43.3%;
  //flex: 2;
  flex-direction: column;
  border-radius: 30px;
  padding: 16px;
  margin: 10px;
  background-color: ${({ background }) => background};
`;
export const BoxDate = styled.div`
  display: flex;
  color: #4a4a4a;
  opacity: 0.7;
  font-size: 14px;
  line-height: 16px;
`;
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  svg {
	  width: var(--size);
	  height: var(--size);
	  --size: 20px;
    cursor: pointer;
  }
`;
export const BoxContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
export const BoxHeader = styled.div`
  display: flex;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
`;
export const BoxSubHeader = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.7;
`;
export const BoxProgress = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleProgress = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
export const Progress = styled.div`
  display: flex;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin: 8px 0;
`;
export const Line = styled.div`
	display: flex;
  width: ${({ percent }) => percent};
  background-color: ${({ bgProgress }) => bgProgress};
  transition: 0.5s;
`;
export const BoxProgressPercentage = styled.div`
  display: flex;
  margin-left: auto;
`;
