import ApiCaller from 'services/ApiCallerService';

/**
 * Adds an apiCaller property to children classes, which is singleton.
 */
class ServiceAbstract {
    /**
     * @param {ApiCallerService}
     */
    apiCaller;

    constructor() {
        if (new.target === ServiceAbstract) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }

        this.apiCaller = ApiCaller;
    }
}

export default ServiceAbstract;
