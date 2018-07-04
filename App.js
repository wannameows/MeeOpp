import React from 'react';
import {
  Provider
} from 'react-redux';
import styled from 'styled-components';
import {
  initializeApp
} from 'firebase';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID
} from './src/constants/config';

import {
  store
} from './src/store';

import {
  Profile
} from './src/screens';

initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID
});

export default () => (
  <AppWrapper>
    <Provider store={store}>
      <Profile />
    </Provider>
  </AppWrapper>
);

const AppWrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: #cecece;
`;
