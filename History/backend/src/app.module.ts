import { Module } from '@nestjs/common';
import { FilesModule } from './modules/files/files.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [FilesModule],
  controllers: [],
  providers: [PrismaClient],
})
export class AppModule {}
