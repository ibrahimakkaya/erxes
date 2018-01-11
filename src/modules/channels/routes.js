import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import { Channels } from './containers';
import {
  Twitter,
  MessengerAppearance,
  MessengerConfigs
} from 'modules/settings/integrations/containers';

const routes = () => [
  <Route
    key="/channels/messenger/configs/:integrationId"
    exact
    path="/channels/messenger/configs/:integrationId"
    component={({ match }) => {
      const id = match.params.integrationId;
      return <MessengerConfigs integrationId={id} />;
    }}
  />,

  <Route
    key="/channels/messenger/appearance/:integrationId"
    exact
    path="/channels/messenger/appearance/:integrationId"
    component={({ match }) => {
      const id = match.params.integrationId;
      return <MessengerAppearance integrationId={id} />;
    }}
  />,

  <Route
    key="/settings/integrations/twitter"
    exact
    path="/settings/integrations/twitter"
    component={() => <Twitter type="link" />}
  />,

  <Route
    key="/service/oauth/twitter_callback"
    exact
    path="/service/oauth/twitter_callback"
    component={({ history, location }) => {
      const queryParams = queryString.parse(location.search);

      return (
        <Twitter type="form" history={history} queryParams={queryParams} />
      );
    }}
  />,

  <Route key="/channels" exact path="/channels" component={Channels} />
];

export default routes;
