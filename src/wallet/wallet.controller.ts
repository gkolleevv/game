import {Body, Controller, Get, Patch, Post} from "@nestjs/common";
import {WalletService} from "./wallet.service";
import {CreateWalletDto} from "./dto/create-wallet.dto";

@Controller('api/wallet')
export class WalletController {

    constructor(private readonly walletService: WalletService) {
    }

    @Patch()
    update(@Body() bet: any) {
        return this.walletService.updateBet(bet);
    }

    @Get()
    getWalletData() {
        return this.walletService.getWalletData();
    }

    @Post('/deposit')
    addMoney(@Body() createWalletDto: CreateWalletDto) {
        return this.walletService.addMoney(createWalletDto)
    }

    @Post('/withdrawn')
    withdrawnMoney(@Body() createWalletDto: CreateWalletDto) {
        return this.walletService.withdrawnMoney(createWalletDto)
    }
}
