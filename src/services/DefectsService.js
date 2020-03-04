import ServiceAbstract from 'services/ServiceAbstract';

class DefectsService extends ServiceAbstract {
    getDefects() {
        return this.apiCaller.get('/defects.json');
    }
}

export default new DefectsService();
