import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import About from '@/components/about.vue';
import Legal from '@/components/legal.vue';
import Info from '@/components/info.vue';

import Content from '@/components/content.vue';
import Item from '@/components/item.vue';

import getters from '@/store/getters.js';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(VueRouter);
localVue.use(Vuex);


describe('About', () => {
  const wrapper = shallowMount(About);

  it('welcomes visitors', () => {
    expect(wrapper.html()).toContain('<p>Welcome to the site!</p>')
  })

})

describe('Legal', () => {
  const wrapper = shallowMount(Legal);

  it('contains important legal data', () => {
    expect(wrapper.html()).toContain('<p>Data provided by this service are for information purposes only. User due dilligence is required.</p>');
  })
})

describe('Info', () => {
  const wrapper = shallowMount(Info);

  it('contains the phone data', () => {
    expect(wrapper.html()).toContain('<p>phone: +(country code)(area code)(phone number)</p>');
  })
})

describe('Item', () => {
  it('has the coin props', () => {
    const wrapper = mount(Item, {
      localVue,
      router,
      propsData: {
        coin: {"id":"19","symbol":"HKF","name":"hkfcoin","price":110,
        "timestamp":"2018-07-21","logo":"/images/hkf.png"}
      }
    })
    expect(wrapper.props().coin).toBeTruthy();
  })
})

describe('Content', () => {

  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        items: {"HKF":{"id":"19","symbol":"HKF","name":"hkfcoin","price":110,"timestamp":"2018-07-21","logo":"/images/hkf.png"}}, 
        intervalID: null
      },
      getters
    })
  })

  it('Content populates items props with store getter itemData', () => {
    const wrapper = shallowMount(Content, { store, localVue });
    const data = getters.inputValue;
    expect(wrapper.props().items).toBe(data);
  })

})

