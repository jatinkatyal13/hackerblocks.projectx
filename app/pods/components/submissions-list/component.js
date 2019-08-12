import Component from '@ember/component';
import { restartableTask } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class SubmissionListComponent extends Component {
  @service store

  @alias('fetchSubmissionsTask.lastSuccessful.value') submissions

  didReceiveAttrs() {
    this.fetchSubmissionsTask.perform()
  }

  @restartableTask fetchSubmissionsTask = function *() {
    const contest_id = this.contest.id
    const problem_id = this.problem.id

    const submissions = yield this.store.query('submission', {
      filter: {
        contest_id,
        problem_id
      },
      sort: '-createdAt'
    })

    return submissions
  }
}
