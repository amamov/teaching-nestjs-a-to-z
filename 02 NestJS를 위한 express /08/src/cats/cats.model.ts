export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: 'fsduifh',
    name: 'blue',
    age: 8,
    species: 'Russian Blue',
    isCute: true,
    friends: ['asdfhj29009', 'WE09tju2j'],
  },
  {
    id: 'iohf2309q4hr',
    name: 'som',
    age: 4,
    species: 'Sphynx cat',
    isCute: true,
    friends: ['weju0fj20qj', 'asdfhj29009', 'weju0fj20qj'],
  },
  {
    id: 'WE09tju2j',
    name: 'lean',
    age: 6,
    species: 'Munchkin',
    isCute: false,
    friends: [],
  },
  {
    id: 'asdfhj29009',
    name: 'star',
    age: 10,
    species: 'Scottish Fold',
    isCute: true,
    friends: ['weju0fj20qj'],
  },
  {
    id: 'weju0fj20qj',
    name: 'red',
    age: 2,
    species: 'Sharm',
    isCute: false,
    friends: [],
  },
];
