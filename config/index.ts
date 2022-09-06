const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http:localhost:3000' : 'http:localhost:3000'

export const authorizedUsers = ['bcarvalho2@umassd.edu']