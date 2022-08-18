import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4rem 0 2rem 0;

  background-color: #101522;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
  padding: 24px;

  text-align: center;

  color: #fff;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;

  font-size: 24px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const FooterSubText = styled.p`
  margin-bottom: 14px;

  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;

    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;

  border-radius: 2px;
  border: none;
  border: 1px solid #fff;

  outline: none;

  font-size: 16px;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    margin: 0 0 16px 0;

    width: 100%;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 16px;

  width: 160px;

  text-align: left;

  box-sizing: border-box;

  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0;

    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  margin-bottom: 0.5rem;

  text-decoration: none;

  color: #fff;

  &:hover {
    transition: 0.3s ease-out;

    color: #0467fb;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 40px auto 0 auto;

  max-width: 1000px;
  width: 90%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;

  margin-bottom: 16px;

  text-decoration: none;

  cursor: pointer;

  font-size: 2rem;

  color: #fff;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 16px;

  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;

  color: #fff;
`;
