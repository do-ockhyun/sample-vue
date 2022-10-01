module.exports = {
  apps: [
    {
      name: "sample-vue",
      exec_mode: "cluster",
      instances: "2",
      script: "./.output/server/index.mjs",

      // 개발 환경에서 적용될 설정
      // pm2 start ecosystem.config.js
      env: {
        HOST: '0.0.0.0',
        PORT: 5000,
        NODE_ENV: 'development'
      },

      // 배포 환경에서 적용될 설정
      // pm2 start ecosystem.config.js --env production
      env_production: {
        HOST: '0.0.0.0',
        PORT: 5000,
        NODE_ENV: 'production'
      },
      
      output: './logs/console.log',
      error: './logs/consoleError.log'
    },
  ],


/* 
  deploy: {
    production: {
      // sample
      user: "node",
      host: "123.12.123.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
    },
  },
*/
};
