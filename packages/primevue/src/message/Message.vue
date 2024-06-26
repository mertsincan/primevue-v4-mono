<template>
    <transition name="p-message" appear v-bind="ptmi('transition')">
        <div v-show="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('root')">
            <slot v-if="$slots.container" name="container" :closeCallback="close"></slot>
            <div v-else :class="cx('content')" v-bind="ptm('content')">
                <slot name="messageicon" class="p-message-icon">
                    <component :is="icon ? 'span' : iconComponent" :class="[cx('icon'), icon]" v-bind="ptm('icon')"></component>
                </slot>
                <div class="p-message-text" :class="cx('text')" v-bind="ptm('text')">
                    <slot></slot>
                </div>
                <button v-if="closable" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" @click="close($event)" v-bind="{ ...closeButtonProps, ...ptm('closeButton') }">
                    <slot name="closeicon">
                        <i v-if="closeIcon" :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')" />
                        <TimesIcon v-else :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')" />
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import CheckIcon from '@primevuelab/icons/check';
import ExclamationTriangleIcon from '@primevuelab/icons/exclamationtriangle';
import InfoCircleIcon from '@primevuelab/icons/infocircle';
import TimesIcon from '@primevuelab/icons/times';
import TimesCircleIcon from '@primevuelab/icons/timescircle';
import Ripple from 'primevuelab/ripple';
import BaseMessage from './BaseMessage.vue';

export default {
    name: 'Message',
    extends: BaseMessage,
    inheritAttrs: false,
    emits: ['close', 'life-end'],
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (this.life) {
            setTimeout(() => {
                this.visible = false;
                this.$emit('life-end');
            }, this.life);
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        TimesIcon,
        InfoCircleIcon,
        CheckIcon,
        ExclamationTriangleIcon,
        TimesCircleIcon
    }
};
</script>
