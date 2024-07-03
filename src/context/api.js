import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_CODE;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

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
      size: 10, 
      _source: ['name', 'location.locality', 'location.region', 'location.country'],
    });
    return response.data;
  } catch (error) {
    console.error('Error searching companies:', error);
    throw error;
  }
};

