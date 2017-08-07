exports.config = {
    seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),
    specs: [
        'spec.js',
    ],
    SELENIUM_PROMISE_MANAGER: false,
}