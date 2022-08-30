import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
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
