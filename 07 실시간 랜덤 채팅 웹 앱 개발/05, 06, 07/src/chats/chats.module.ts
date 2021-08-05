import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';

@Module({
  providers: [ChatsGateway],
})
export class ChatsModule {}
