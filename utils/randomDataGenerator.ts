import { faker } from "@faker-js/faker";


export class RandomeDataUtil
{
    static randomOTP(): number
    {
        return faker.number.int({ min: 0, max: 9 })
    }
}