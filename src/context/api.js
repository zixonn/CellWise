import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_CODE;
const BASE_URL = 'https://api.peopledatalabs.com/v5/company/search';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  },
});

export const searchCompanies = async (zipCode) => {
  try {
    const response = await api.post('', {
      query: {
        bool: {
          must: [
            {
              match: {
                'location.postal_code': zipCode,
              },
            },
            {
              match: {
                industry: 'hospital & health care',
              },
            },
          ],
        },
      },
      _source: ['name', 'location.locality', 'location.region', 'location.country'], // Only request relevant fields
    });
    return response.data;
  } catch (error) {
    console.error('Error searching companies:', error);
    throw error;
  }
};
