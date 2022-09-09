import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 사용 가능
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginsService } from './logins/logins.service';
import { LoginsController } from './logins/logins.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 다른 모듈에서 config 모듈 가져올 필요 x
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController, LoginsController],
  providers: [AppService, LoginsService],
})
export class AppModule implements NestModule {
  configure() {
    const DEBUG = process.env.MODE === 'dev' ? true : false;
    mongoose.set('debug', DEBUG); // mongoose query가 찍힘
  }
}
