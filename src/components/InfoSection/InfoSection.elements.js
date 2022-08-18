import styled from 'styled-components';

export const InfoSec = styled.div`
  padding: 160px 0;

  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

  margin: 0 -15px -15px -15px;
`;

export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;

  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;

  max-width: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;

    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  max-width: 540px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  margin-bottom: 16px;

  font-size: 18px;
  letter-spacing: 1.4px;

  line-height: 16px;

  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
`;

export const Heading = styled.h1`
  margin-bottom: 24px;

  font-size: 48px;

  line-height: 1.1;

  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;

  max-width: 440px;

  font-size: 18px;
  line-height: 24px;

  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  max-width: 555px;
`;

export const Img = styled.img`
  display: inline-block;

  padding-right: 0;

  max-width: 100%;
  max-height: 500px;

  vertical-align: middle;

  border: 0;
`;
