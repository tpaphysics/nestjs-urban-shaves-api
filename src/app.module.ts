import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/gards/jwt-auth.guard';
import { AppointmentsModule } from './appointments/appointments.module';
import { MailModule } from './mail/mail.module';
import { CheckInDataBaseConstraint } from './decorators/check-in-database.decorator';
import { AppointmentsService } from './appointments/appointments.service';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
    }),
    AppointmentsModule,
    ProvidersModule,
    MailModule,
  ],
  providers: [
    AppointmentsService,
    CheckInDataBaseConstraint,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
