import { Req } from '@nestjs/common';
import { Get, Controller, Render, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log(param);
    console.log(body);
    console.log(req);
    return this.appService.getHello();
  }

  @Get()
  @Render('index')
  login() {
    return;
  }

  @Get('login')
  @Render('login')
  signUp() {
    return;
  }

  @Get('main')
  @Render('main')
  main() {
    return;
  }
}
