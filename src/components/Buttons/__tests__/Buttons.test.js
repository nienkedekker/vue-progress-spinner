import Buttons from "../Buttons.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
const localVue = createLocalVue();

localVue.use(Vuex);

describe("Buttons.vue", () => {
  it("Start Upload button is rendered when the upload has not yet started", () => {
    const wrapper = shallowMount(Buttons, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: false,
              uploading: false,
              canceling: false,
              finished: false
            }
          }
        }
      }
    });
    expect(wrapper.text()).toContain("Start Upload");
  });

  it("Cancel Upload button is rendered when the upload has started", () => {
    const wrapper = shallowMount(Buttons, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: true,
              uploading: true,
              canceling: false,
              finished: false
            }
          }
        }
      }
    });

    expect(wrapper.text()).toContain("Cancel Upload");
  });

  it("Yes and No buttons are rendered when the upload is being canceled, and the cancelUpload class is set on the Yes button", () => {
    const wrapper = shallowMount(Buttons, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: true,
              uploading: false,
              canceling: true,
              finished: false
            }
          }
        }
      }
    });

    expect(wrapper.find(".cancelUpload").exists()).toBe(true);
    expect(wrapper.text()).toContain("Yes");
    expect(wrapper.text()).toContain("No");
  });

  it("Upload another file button is rendered when the upload is being finished", () => {
    const wrapper = shallowMount(Buttons, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: true,
              uploading: false,
              canceling: false,
              finished: true
            }
          }
        }
      }
    });

    expect(wrapper.text()).toContain("Upload another file");
  });
});
