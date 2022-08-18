import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('login')
  root() {
    return {
      data: {
        title: 'Chattings',
        copyright: 'chi sae',
      },
    };
  }
}
