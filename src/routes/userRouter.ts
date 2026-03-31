import { NextFunction, Request, Response } from "express";
import { BaseRouter } from "./baseRouter";

export class UserRouter extends BaseRouter {
  private showUsers(req: Request, res: Response, next: NextFunction): void {
    res.send("Users");
  }

  init(): void {
    this.router.get("/", this.showUsers.bind(this));
  }
}