import Message from "../Message.vue";
import Canceled from "../dialogs/Canceling.vue";
import Finished from "../dialogs/Finished.vue";
import Uploading from "../dialogs/Uploading.vue";

import { shallowMount } from "@vue/test-utils";

describe("Buttons.vue", () => {
  it("Cancel dialog is rendered when upload is being canceled", () => {
    const wrapper = shallowMount(Message, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: false,
              uploading: false,
              canceling: true,
              finished: false
            }
          }
        }
      }
    });
    expect(wrapper.find(Uploading).exists()).toBe(false);
    expect(wrapper.find(Finished).exists()).toBe(false);
    expect(wrapper.find(Canceled).exists()).toBe(true);
  });

  it("Uploading dialog is rendered when upload is in progress", () => {
    const wrapper = shallowMount(Message, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: false,
              uploading: true,
              canceling: false,
              finished: false
            }
          }
        }
      }
    });
    expect(wrapper.find(Uploading).exists()).toBe(true);
    expect(wrapper.find(Finished).exists()).toBe(false);
    expect(wrapper.find(Canceled).exists()).toBe(false);
  });

  it("Finished dialog is rendered when upload is finished", () => {
    const wrapper = shallowMount(Message, {
      mocks: {
        $store: {
          getters: {
            uploadState: {
              started: false,
              uploading: false,
              canceling: false,
              finished: true
            }
          }
        }
      }
    });
    expect(wrapper.find(Uploading).exists()).toBe(false);
    expect(wrapper.find(Finished).exists()).toBe(true);
    expect(wrapper.find(Canceled).exists()).toBe(false);
  });
});
