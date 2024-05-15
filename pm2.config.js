module.exports = {
    apps: [
        {
            name: 'web',
            exec_mode: 'cluster',
            instances: 'max',
            args: 'start',
            script: 'npm',
            watch: false,
            autorestart: true,
            combine_logs: true,
            exp_backoff_restart_delay: 100,
            ignore_watch: ['node_modules'],
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            // pid_file: './pm2/pid/headless_pm.pid',
            error_file: './pm2/logs/headless_err.log',
        },
    ],
}
