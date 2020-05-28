import Component from '@ember/component';

export default Component.extend({
  classNames: ['upf-rating'],

  actions: {
    saveRatingValue(rating) {
      this.influencer.set('rating', rating);
    }
  }
});
