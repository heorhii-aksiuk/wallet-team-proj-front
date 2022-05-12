import styled from 'styled-components';


export const Table = styled.table `
  display: inline-block;
  width: 294px;
  margin: auto;
  @media (max-width: 767px) {
    overflow-x: auto;
    height: 57vh;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  }
  @media (min-width: 768px) {
    width: 688px;
  }
  @media (min-width: 1280px) {
    width: 700px;
    margin-left: 30px;
  } ;
`;
export const Thead = styled.thead `
  display: block;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border-radius: 30px;
`;
export const Th = styled.th `
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  padding: 10px;
  text-align: start;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;
export const Col = styled.td `
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color:   income: '#24CCA7'
  padding: 10px;
  text-align: end;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;

export const Td = styled.td `
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: end;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;

export const Tbody = styled.tbody `
  background-color: white;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid;
  border-radius: 8px;
  border-left: 4px solid;
  border-color:   income: '#24CCA7'
  @media (min-width: 768px) {
    background-color: transparent;
    margin: 0;
    border: none;
    text-align: center;
    height: 35vh;
    overflow-x: auto;
    overflow-y: overlay;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  }
  @media (min-width: 1280px) {
    height: 600px;
  }
`;

export const Tr = styled.tr `
  display: flex;
  width: 275px;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  &:last-child {
    border: 0;
    box-shadow: none;
  }
  @media (min-width: 768px) {
    display: table;
    width: 688px;
    height: 54px;
  }
  @media (min-width: 1280px) {
    width: 700px;
  } ;
`;
export const TrHead = styled.tr `
  height: 52px;
`;
export const Text = styled.h2 `
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color:   expenses: '#FF6596'
  @media (min-width: 1280px) {
    padding-left: 50px;
  } ;
`;