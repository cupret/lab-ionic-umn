export class Booking{
    constructor(
        public id: string,
        public place_id: string,
        public place_title: string,
        public user_id: string,
        public guest_number: number
    ){}
}