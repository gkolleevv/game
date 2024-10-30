import { Injectable } from '@nestjs/common';
import {CreateWalletDto} from "./dto/create-wallet.dto";

export interface Bets {
    totalBets: number;
    winningBets: number;
    loosingBets: number;
}

@Injectable()
export class WalletService {
    budget = 100;
    currentBet = 1;

    bets: Bets = {
        totalBets: 0,
        winningBets: 0,
        loosingBets: 0
    };

    constructor() {
    }

    updateBet(body) {
        this.currentBet = body.bet;
        return true;
    }

    getWalletData() {
        return {
            budget: this.budget,
            bets: this.bets,
            currentBet: this.currentBet
        }
    }

    addMoney(dto: CreateWalletDto): boolean {
        this.budget = this.budget + dto.money;
        return true;
    }

    withdrawnMoney(dto: CreateWalletDto): boolean {
        this.budget = this.budget - dto.money;
        return true;
    }
}
