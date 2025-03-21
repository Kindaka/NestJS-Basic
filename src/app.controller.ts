import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("home")
  handlehomePage() {
    const message1 = this.appService.getHello();
    
    return{
      message: message1
    }
  }
}
