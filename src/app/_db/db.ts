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
      lat: faker.address.latitude(),
      lon: faker.address.longitude()
    }
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
    const addresses = manyAddresses();
    return {addresses};
  }
}

