import { mount } from '@vue/test-utils';
import Popover from './Popover.vue';

describe('Popover.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Popover, {
            global: {
                plugins: [primevue - lab],
                stubs: {
                    teleport: true
                }
            },
            props: {
                showCloseIcon: true
            },
            slots: {
                default: 'primevuelab'
            }
        });

        await wrapper.vm.toggle({}, {});
    });

    it('should exist', () => {
        expect(wrapper.find('.p-popover.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').text()).toBe('primevuelab');
        expect(wrapper.find('.p-popover-close').exists()).toBe(true);
    });
});
