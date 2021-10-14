module.exports = {
  apps: [{
    name: "api",
    script: "./index.js",
    watch: true,
    env_local: {
      "NODE_ENV": "local",
      "API_DESCRIPTION": "Estás ejecutando tu API en modo desarrollador.",
      "DB_PASS": "1234567890"
    },
    env_production: {
      "NODE_ENV": "production",
      "API_DESCRIPTION": "Estás ejecutando tu API en producción. ¡¡Ten cuidado!!",
      "DB_PASS": "1234567890"
    }
  }]
};
