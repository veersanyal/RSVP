import { ServiceBase } from "../../../../../libs/baselib/src/index.js";
export class CardService extends ServiceBase {
    constructor(model: any) {
        super(model);
    }
    async setRSVP(id: string, rsvp: any) {
        const currentCard = await this.get(id);
        if (currentCard) {
            const index = currentCard.rsvps.find((r: any) => r.userid === rsvp.userid);
            if (index >= 0) {
                currentCard.rsvps[index] = rsvp;
            }
            else { currentCard.rsvps.push(rsvp) }
        }
        return await this.create(currentCard);
    }
}