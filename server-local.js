'use strict';

const app = require('./express/server');

const PORT = process.env.PORT || 4881;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
