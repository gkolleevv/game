import { Injectable } from '@nestjs/common';

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


    getSpinData() {
        this.elements.forEach((row, index) => {
            row.forEach((element, i) => {
                this.elements[index][i] = this.getRandomSymbol(this.symbols);
            })
        });
        return this.elements;
    }

    // findOne(id: number) {
    //     const user = this.users.find(user => user.id === id)
    //
    //     if (!user) throw new NotFoundException('User Not Found')
    //
    //     return user
    // }

    getRandomSymbol(obj: GameSymbol): string {
        const el = Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
        // @ts-ignore
        return obj[el] as any;
    }
}
