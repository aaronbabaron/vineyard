import path from 'path';
import express from 'express';

// SERVER CONTROLLER DEPENDENCIES
import organizationsRouter from './routes/organizations';
import addressesRouter from './routes/addresses';
import vineyardsRouter from './routes/vineyards';
import blocksRouter from './routes/blocks';
import rowsRouter from './routes/rows';
import usersRouter from './routes/users';
import notesRouter from './routes/notes';
import alertsRouter from './routes/alerts';
// import messagesController from './routes/messages';

import { passport } from './auth/local';
import weatherRoutes from './weather/routes';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).json('unauthorized access; please login');
    }
  };

  app.use('/api/organization', checkAuthentication, organizationsRouter);
  app.use('/api/organization/vineyard', checkAuthentication, vineyardsRouter);
  app.use('/api/organization/vineyard/block', checkAuthentication, blocksRouter);
  app.use('/api/organization/vineyard/block/row', checkAuthentication, rowsRouter);
  app.use('/api/address', checkAuthentication, addressesRouter);
  app.use('/api/signup', checkAuthentication, usersRouter);
  app.use('/api/user', checkAuthentication, usersRouter);
  app.use('/api/note', checkAuthentication, notesRouter);
  app.use('/api/alert', checkAuthentication, alertsRouter);

  app.use('/api/weather', checkAuthentication, weatherRoutes);

  // === LOGIN ROUTING ===
  app.post('/api/login',
  passport.authenticate('local'), function(req, res){
    res.status(201).json(req.user);
  });

  // === LOGOUT ROUTING ===
  app.get('/api/logout', function(req, res){
    req.logout();
    res.status(201).json(req.user);
  });

  // === WILDCARD ROUTING ===
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
};
