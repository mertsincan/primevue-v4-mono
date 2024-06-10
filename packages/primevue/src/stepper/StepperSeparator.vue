<template>
    <span :class="cx('separator')" v-bind="ptm('separator')" />
</template>

<script>
import BaseComponent from '@primevuelab/core/basecomponent';

export default {
    name: 'StepperSeparator',
    hostName: 'Stepper',
    extends: BaseComponent
};
</script>
