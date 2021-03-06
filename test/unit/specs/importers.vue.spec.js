import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import fakeStore from '../helpers/baseStore';
import Importers from '../../../src/components/MainPage/Importers';
import AddScraper from '../../../src/components/MainPage/Importers/AddScraper';
import { scrapers } from './../../../src/modules/scrapers';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Importers', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(fakeStore);
    wrapper = shallowMount(Importers, { store, localVue });
  });

  it('Should contain an AddScraper component for each scraper', () => {
    expect(wrapper.findAll(AddScraper).length).toBe(scrapers.length);
  });
});
