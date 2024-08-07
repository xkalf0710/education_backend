import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: ""
})
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get('all')
  getHello(): string {
    return this.configService.get('dbconfig.env.type');
  }
}
