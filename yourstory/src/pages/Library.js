import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import LibraryHeader from '../components/library/LibraryHeader';
import LibraryContent from '../components/library/LibraryContent';
import { media } from '../styles/theme';

const Library = () => {
  return (
    <div>
      <NavBar pagename="library" />
      <PageContainer>
        <LibraryHeader />
        <div>이타적 자서전 도서 목록</div>
        <LibraryContent />
      </PageContainer>
    </div>
  );
};

const PageContainer = styled.div`
  padding: 81px 5%;
  margin-left: 16.5625rem;
  font-family: Inter;

  ${media.laptop} {
    margin-left: 16.5625rem;
    padding: 40px 20px;
  }

  ${media.tablet} {
    padding: 20px 10px;
    margin-left: 16.5625rem;
  }
`;

export default Library;
