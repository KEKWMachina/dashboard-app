interface BaseUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  ip: string;
  macAddress: string;
  university: string;
  ein: string;
  ssn: string;
  userAgent: string;
  role: string;
}

interface UserAdress {
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
}

interface UserBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface UserCompany {
  department: string;
  name: string;
  title: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
}

interface UserCryptoData {
  coin: string;
  wallet: string;
  network: string;
}

interface UserHair {
  color: string;
  type: string;
}

export interface UserInterface extends BaseUser {
  address: UserAdress;
  bank: UserBank;
  company: UserCompany;
  crypto: UserCryptoData;
  hair: UserHair;
}
