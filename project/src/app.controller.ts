import { Get, Controller, Render, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  @Render('login')
  login() {
    return;
  }

  @Get('main')
  @Render('main')
  main() {
    return;
  }
}
