import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { Routes } from './api/routes';
import { v4 } from 'uuid';
import { IRequest } from './interface/RequestInterface';
import swaggerUi from 'swagger-ui-express';

import * as swaggerSpec from './swagger';

class App {
  public app: Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      (req as IRequest).uid = v4();
      next();
    });
    this.app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
