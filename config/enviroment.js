const production = {
    name : 'Procuction',
    asset_path : './assets',
    session_cookie_key : 'blahsomething',
    db : 'codeial_development',
    smtp : {
        service : 'gmail',
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        auth: {
            user : 'codeial2714@gmail.com',
            pass : 'swwvokjzjqqmvcnn'
        }
    },
    goggle_clientID : "651120776925-jalgkplaar7p3a1chn79b4jlod21reke.apps.googleusercontent.com",
    google_clientSecret : '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',
    google_callbackURL : 'http://localhost:8000/users/auth/google/callback',
    jwt_screate : 'codeial'
}

const development = {
    name : 'Development',
    asset_path : './assets',
    session_cookie_key : 'blahsomething',
    db : 'codeial_development',
    smtp : {
        service : 'gmail',
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        auth: {
            user : 'codeial2714@gmail.com',
            pass : 'swwvokjzjqqmvcnn'
        }
    },
    goggle_clientID : "651120776925-jalgkplaar7p3a1chn79b4jlod21reke.apps.googleusercontent.com",
    google_clientSecret : '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',
    google_callbackURL : 'http://localhost:8000/users/auth/google/callback',
    jwt_screate : 'codeial'
}

module.exports = development;