import config from './config.json';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.ENVIRONMENT || 'PROD';
const environmentConfig = config[env];
console.log(`Current environment: ${env}`);

if (!environmentConfig) {
    throw new Error(`Environment configuration not found for ${env}`);
}

export function getBaseUrl() {
    
    return process.env.BASE_URL || environmentConfig.BASE_URL;
}

export function getContactPageUrl() {
    
    return process.env.CONTACT_PAGE_URL || environmentConfig.CONTACT_PAGE_URL;
}

export function getSolutionsPageUrl() {
    return process.env.SOLUTIONS_PAGE_URL || environmentConfig.SOLUTIONS_PAGE_URL;
}
