import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: BASE_URL,
        });

        this.api.interceptors.request.use(
            (config) => {
                const token = "7732733";

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    // Helper method to add delay between retries
    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Helper method to make request with retries
    async makeRequestWithRetry(requestFn, retries = MAX_RETRIES) {
        try {
            return await requestFn();
        } catch (error) {
            if (retries > 0 && this.shouldRetry(error)) {
                await this.delay(RETRY_DELAY);
                return this.makeRequestWithRetry(requestFn, retries - 1);
            }
            throw error;
        }
    }

    // Determine if request should be retried
    shouldRetry(error) {
        return error.response && (error.response.status >= 500 || error.response.status === 429);
    }

    // GET request
    async get(endpoint) {
        try {
            const response = await this.makeRequestWithRetry(() => this.api.get(endpoint));
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // POST request 
    async post(endpoint, data) {
        try {
            const response = await this.makeRequestWithRetry(() => this.api.post(endpoint, data));
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // PUT request
    async put(endpoint, data = {}) {
        try {
            const response = await this.makeRequestWithRetry(() => this.api.put(endpoint, data));
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
    
    // Handle errors globally
    handleError(error) {
        if (error.response) {
            console.error("API error:", error.response.data);
        } else if (error.request) {
            console.error("No response from server:", error.request);
        } else {
            console.error("Request error:", error.message);
        }
        throw error;
    }
}

const apiService = new ApiService();
export { apiService };
