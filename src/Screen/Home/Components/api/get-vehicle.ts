import axios from 'axios';

// Define the vehicle type
type Vehicle = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  year: string;
  price: string;
  description: string;
};

// Define the shape of the API response
type GetVehiclesResponse = {
  message: string;
  data: Vehicle[];
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

async function getAllVehicles(): Promise<Vehicle[]> {
  try {
    const response = await axios.get<GetVehiclesResponse>(
      `${BASE_URL}/vehicle`,
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch vehicles');
  }
}

export default getAllVehicles;
