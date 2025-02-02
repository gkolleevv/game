import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GameModule} from "./game/game.module";
import {WalletModule} from "./wallet/wallet.module";

@Module({
  imports: [GameModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
