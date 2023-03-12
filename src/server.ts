http
  .createServer(router)
  .listen(config.server.port, () =>
    Logging.info(`Server running on port ${config.server.port}`)
  );
