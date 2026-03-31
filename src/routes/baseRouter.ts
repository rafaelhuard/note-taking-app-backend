import { Router } from "express";

export abstract class BaseRouter {
  private _router: Router = Router({ mergeParams: true });

  constructor() {
    this.init();
  }

  public get router(): Router {
    return this._router;
  }

  protected abstract init(): void;
}