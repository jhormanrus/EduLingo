import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthzModule } from './auth/authz.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'mISERjYnhy',
      password: 'C6cb8PBbeD',
      database: 'mISERjYnhy',
      entities: [
        
      ],
      synchronize: false,
      logging: ['query'],
      charset: 'utf8mb4'
    }),
    AuthzModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
