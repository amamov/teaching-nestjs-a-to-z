import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //code

    console.log('hello world!!');
    return 'Hello World!';
  }
}
