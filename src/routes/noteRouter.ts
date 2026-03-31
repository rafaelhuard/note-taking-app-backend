import { NextFunction, Request, Response } from "express";
import { BaseRouter } from "./baseRouter";

export class NoteRouter extends BaseRouter {

  private showNotes(req: Request, res: Response, next: NextFunction): void {
    res.send("Notes");
  }

  init(): void {
    this.router.get("/", this.showNotes.bind(this));
  }
}