var cluster = require('cluster');
var workers = process.env.WORKERS || require('os').cpus().length;

if (cluster.isMaster) {
  console.log('start cluster with %s workers', workers);
  for (var i = 0; i < workers; ++i) {
    var worker = cluster.fork().process;
    console.log('worker %s started.', worker.pid);
  }
  cluster.on('exit', function(worker) {
    console.log('worker %s died. restart...', worker.process.pid);
    cluster.fork();
  });
}  else {

  const config = require('./config');
  const app = require('../src/lib/Express');
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;

  if (!module.parent) {
    mongoose.connect(config.db.url).then(() => {
      console.log("Sucsess connected database");
    }).catch(err =>{
      console.log(err);
      console.log('Could not connect to the database. Exiting now...');
      process.exit();
    });
  }

  if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, onStarted);
    app.on('error', onError);
    app.on('listening', onListening);
  }

  function onStarted() {
    console.info(`Server started on port ${config.port}`);
  }

  function onError(e) {
    console.error(`ERROR: ${e.message}`);
  }

  function onListening() {
    console.info(`Server is listening on port ${config.port}`);
  }
}

process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})


