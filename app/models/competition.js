import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  contests: DS.hasMany('contest'),
  startDate: DS.attr(),
  endDate: DS.attr(),
  faqs: DS.attr(),
  banner: DS.attr(),
  thumbnail: DS.attr(),
  overview: DS.attr()
});