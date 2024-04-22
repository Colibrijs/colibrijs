import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Header('Content-Type', 'text/html')
  @Get()
  get() {
    return 'Nothing here';
  }
}
