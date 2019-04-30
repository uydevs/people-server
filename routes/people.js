const { getPeople } = require('../services/people');

module.exports = router => {
  router.get('/api/people', (req, res) => {
    getPeople()
      .then(people => res.json(people))
      .catch(err => res.json(err));
  });
};
