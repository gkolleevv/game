import { Injectable } from '@nestjs/common';
import {WalletService} from "../wallet/wallet.service";

export interface GameSymbol {
    star: string;
    dollar: string;
    dot: string;
    percentage: string;
    upper: string
}

@Injectable()
export class GameService {
    private elements  = [
        ['*','^','$'],
        ['*','$','^'],
        ['^','$','*']
    ];
    private symbols: GameSymbol = {
        star: '*',
        dollar: '$',
        dot: '@',
        percentage: '%',
        upper: '^'
    }

    constructor(private walletService: WalletService) {
    }


    getSpinData() {
        this.elements.forEach((row, index) => {
            row.forEach((element, i) => {
                this.elements[index][i] = this.getRandomSymbol(this.symbols);
            })
        });
        this.checkForWinning();
        return {
            symbolElements: this.elements,
            budget: this.walletService.budget,
            bets: this.walletService.bets
        };
    }


    checkForWinning() {
        let winning = false;
        this.elements.forEach((row, index) => {
            if (row[index] === row[index + 1] && row[index] === row[index + 2]) {
                this.walletService.budget = this.walletService.currentBet * 5 + this.walletService.budget;
                winning = true;
            }
        });
        if (!winning) {
            this.walletService.budget = this.walletService.budget - this.walletService.currentBet;
            this.walletService.bets = {...this.walletService.bets,
                totalBets: ++this.walletService.bets.totalBets,
                loosingBets: ++this.walletService.bets.loosingBets};
        } else {
            this.walletService.bets = {...this.walletService.bets,
                totalBets: ++this.walletService.bets.totalBets,
                winningBets: ++this.walletService.bets.winningBets};
        }
    }


    getRandomSymbol(obj: GameSymbol): string {
        const el = Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
        return obj[el];
    }
}
