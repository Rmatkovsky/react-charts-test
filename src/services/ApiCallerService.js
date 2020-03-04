import axios from 'axios';
import appConfig from 'app-config';

/**
 * Basic api caller service. Uses axios.
 */
class ApiCallerService {
    /**
     * Creates an instance of axios with correct baseUrl and headers.
     */
    constructor() {
        this.apiCaller = axios.create({
            baseURL: appConfig.api.backend.baseUrl,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    /**
     * @param {string} url
     * @param {object} config
     *
     * @returns {AxiosPromise}
     */
    get(url = '', config = {}) {
        return this.apiCaller.get(url, config);
    }
}

export default new ApiCallerService();
