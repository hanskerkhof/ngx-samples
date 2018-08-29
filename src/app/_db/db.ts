import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';

const oneAddress = (index) => {
  return {
    id: index,
    companyName: faker.company.companyName(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    // category: Array.random.arrayElement(['DOV', 'DDOS', 'DFS']),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
    phoneNumber: faker.phone.phoneNumber(), // + ' ' + faker.phone.phoneNumberFormat() + ' ' + faker.phone.phoneFormats(),
    geoLocation: {
      lat: parseFloat(faker.finance.amount(44.251465, 52.510183, 6)),
      lon: parseFloat(faker.finance.amount(4.664840, 27.436198, 6)),
      // lat: parseInt(faker.address.latitude(), 11),
      // lon: parseInt(faker.address.longitude(), 11)
    },
    catchPhrase: faker.company.catchPhrase()
  };
};

const manyAddresses = (count = 10) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(oneAddress(i));
  }
  return res;
};

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const addresses = manyAddresses(12);
    return {addresses};
  }
}

