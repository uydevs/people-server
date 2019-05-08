const { getPeople } = require('../services/people');

module.exports = router => {
  router.get('/api/people', (req, res) => {
    getPeople()
      .then(people => res.json(people))
      .catch(err => res.json(err));
  });

  router.delete('/api/people/:id', (req, res) => {
    res.send(200);
  });

  router.put('/api/people/:id', (req, res) => {
    res.send(200);
  });

  router.post('/api/people', (req, res) => {
    res.send(200);
  });
};
