module.exports = {
  apps: [
    {
      name: "{{component.zopename}}-api-instance1",
      script: "{{component.zopecommon.workdir}}/bin/instance1",
      args: "console",
      cwd: "{{component.zopecommon.workdir}}",
      interpreter: "{{component.zopecommon.workdir}}/bin/python",
      watch: ["{{component.zopecommon.workdir}}"],
      min_uptime: 10000,
      kill_timeout : 3000,
    },
  ]
};

// start all with pm2 restart <pathtofile>/website.pm2.config.js
// or ... --env development to start in development mode


// see documentation:
// https://pm2.keymetrics.io/docs/usage/application-declaration/


// TOOD restart Zope instances on batou run