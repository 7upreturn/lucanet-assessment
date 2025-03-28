import config from './config.json';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.ENVIRONMENT || 'PROD';
const environmentConfig = config[env];
console.log(`Current environment:, ${env}`);

if (!environmentConfig) {
    throw new Error(`Environment configuration not found for ${env}`);
}

export function getBaseUrl() {
    return environmentConfig.BASE_URL;
}

export function getContactPageUrl() {
    return environmentConfig.CONTACT_PAGE_URL;
}
