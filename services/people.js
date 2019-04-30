function getPeople () {
  return Promise.resolve([
    {
      name: 'Andres',
      surname: 'Vila',
      age: 26,
      married: false,
    },
    {
      name: 'Colo',
      surname: 'Reyes',
      age: 0,
      married: false,
    },
    {
      name: 'Gonza',
      surname: 'Diaz',
      age: 0,
      married: false,
    },
    {
      name: 'Maxi',
      surname: 'Dominguez',
      age: 0,
      married: false,
    },
    {
      name: 'Tincho',
      surname: 'Garbarino',
      age: 0,
      married: false,
    },
  ]);
}

module.exports = {
  getPeople
};