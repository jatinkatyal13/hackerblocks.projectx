import Route from '@ember/routing/route';

export default class CompetitionIdRoute extends Route{
  model (params) {
    return this.store.findRecord('competition', params.competition_id, {
      include: 'organization'
    })
  }
  afterModel(model) {
    this.set('breadCrumb', {
      title: model.name
    })
  }
}
