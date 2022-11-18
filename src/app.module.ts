import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeaController } from './tea/tea.controller';

@Module({
  imports: [],
  controllers: [AppController, TeaController],
  providers: [AppService],
})
export class AppModule {}
