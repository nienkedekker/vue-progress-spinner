import ProgressChart from "../ProgressChart.vue";

import { shallowMount } from "@vue/test-utils";

describe("ProgressChart.vue", () => {
  it("circumference and dashOffset is calculated correctly", () => {
    const wrapper = shallowMount(ProgressChart, {
      mocks: {
        $store: {
          getters: {
            percentageUploaded: 20,
            totalPercentage: 100,
            uploadState: {
              canceling: false,
              finished: false,
              started: false,
              uploading: false
            }
          }
        }
      }
    });
    expect(wrapper.find(".progress").exists()).toBe(true);
    expect(wrapper.vm.percentageUploaded).toBe(20);
    expect(wrapper.vm.circumference).toBe(282.7433388230814);
    expect(wrapper.vm.dashOffset).toBe(226.19467105846513);
  });
});
