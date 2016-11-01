// load the config
import config from './config';
// load the express application
import app from './express';
// initialize the configuration first!
require('./config/init')();

const logger = require('./lib/logger')();

// output the configuration
logger.log('config: %j', config);

// start the application
app.listen(config.port, (err) => {
  if (err) {
    logger.log(err);
  }

  logger.log(`Express server listening on port ${config.port} ` +
    `in ${process.env.NODE_ENV} environment`);

  // http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=REACT%0AREDUX%20%0AWEBPACK%0ASTARTER
  logger.log(`

    ██████╗ ███████╗ █████╗  ██████╗████████╗
    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
    ██████╔╝█████╗  ███████║██║        ██║
    ██╔══██╗██╔══╝  ██╔══██║██║        ██║
    ██║  ██║███████╗██║  ██║╚██████╗   ██║
    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝
    ███████╗████████╗ █████╗ ██████╗ ████████╗███████╗██████╗
    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
    ███████╗   ██║   ███████║██████╔╝   ██║   █████╗  ██████╔╝
    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██╔══╝  ██╔══██╗
    ███████║   ██║   ██║  ██║██║  ██║   ██║   ███████╗██║  ██║
    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

  `);
});
