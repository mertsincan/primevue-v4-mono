<template>
    <ul :ref="containerRef" :class="cx('list')" v-bind="level === 0 ? ptm('list') : ptm('optionList')">
        <template v-for="(processedOption, index) of options" :key="getOptionLabelToRender(processedOption)">
            <li
                :id="getOptionId(processedOption)"
                :class="cx('option', { processedOption })"
                role="treeitem"
                :aria-label="getOptionLabelToRender(processedOption)"
                :aria-selected="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                :aria-expanded="isOptionGroup(processedOption) ? isOptionActive(processedOption) : undefined"
                :aria-level="level + 1"
                :aria-setsize="options.length"
                :aria-posinset="index + 1"
                v-bind="getPTOptions(processedOption, index, 'option')"
                :data-p-option-group="isOptionGroup(processedOption)"
                :data-p-active="isOptionActive(processedOption)"
                :data-p-focus="isOptionFocused(processedOption)"
                :data-p-disabled="isOptionDisabled(processedOption)"
            >
                <div v-ripple :class="cx('optionContent')" @click="onOptionClick($event, processedOption)" @mousemove="onOptionMouseMove($event, processedOption)" v-bind="getPTOptions(processedOption, index, 'optionContent')">
                    <component v-if="templates['option']" :is="templates['option']" :option="processedOption.option" :selected="isOptionGroup(processedOption) ? false : isOptionSelected(processedOption)" />
                    <span v-else :class="cx('optionText')" v-bind="getPTOptions(processedOption, index, 'optionText')">{{ getOptionLabelToRender(processedOption) }}</span>
                    <template v-if="isOptionGroup(processedOption)">
                        <component v-if="templates['optiongroupicon']" :is="templates['optiongroupicon']" aria-hidden="true" />
                        <span v-else-if="optionGroupIcon" :class="[cx('groupIcon'), optionGroupIcon]" aria-hidden="true" v-bind="getPTOptions(processedOption, index, 'groupIcon')" />
                        <AngleRightIcon v-else :class="cx('groupIcon')" aria-hidden="true" v-bind="getPTOptions(processedOption, index, 'groupIcon')" />
                    </template>
                </div>
                <CascadeSelectSub
                    v-if="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                    role="group"
                    :class="cx('optionList')"
                    :selectId="selectId"
                    :focusedOptionId="focusedOptionId"
                    :options="getOptionGroupChildren(processedOption)"
                    :activeOptionPath="activeOptionPath"
                    :level="level + 1"
                    :templates="templates"
                    :optionLabel="optionLabel"
                    :optionValue="optionValue"
                    :optionDisabled="optionDisabled"
                    :optionGroupIcon="optionGroupIcon"
                    :optionGroupLabel="optionGroupLabel"
                    :optionGroupChildren="optionGroupChildren"
                    @option-change="onOptionChange"
                    @option-focus-change="onOptionFocusChange"
                    :pt="pt"
                    :unstyled="unstyled"
                    :isParentMount="mounted"
                />
            </li>
        </template>
    </ul>
</template>

<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import { DomHandler, ObjectUtils } from '@primevuelab/core/utils';
import AngleRightIcon from '@primevuelab/icons/angleright';
import Ripple from 'primevuelab/ripple';

export default {
    name: 'CascadeSelectSub',
    hostName: 'CascadeSelect',
    extends: BaseComponent,
    emits: ['option-change', 'option-focus-change'],
    container: null,
    props: {
        selectId: String,
        focusedOptionId: String,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionDisabled: null,
        optionGroupIcon: String,
        optionGroupLabel: String,
        optionGroupChildren: {
            type: [String, Array],
            default: null
        },
        activeOptionPath: Array,
        level: Number,
        templates: null,
        isParentMount: Boolean
    },
    data() {
        return {
            mounted: false
        };
    },
    watch: {
        isParentMount: {
            handler(newValue) {
                newValue && DomHandler.nestedPosition(this.container, this.level);
            }
        }
    },
    mounted() {
        // entering order correction when an option is selected
        (this.isParentMount || this.level === 0) && DomHandler.nestedPosition(this.container, this.level);
        this.mounted = true;
    },
    methods: {
        getOptionId(processedOption) {
            return `${this.selectId}_${processedOption.key}`;
        },
        getOptionLabel(processedOption) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
        },
        getOptionValue(processedOption) {
            return this.optionValue ? ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
        },
        getPTOptions(processedOption, index, key) {
            return this.ptm(key, {
                context: {
                    option: processedOption,
                    index,
                    level: this.level,
                    optionGroup: this.isOptionGroup(processedOption),
                    active: this.isOptionActive(processedOption),
                    focused: this.isOptionFocused(processedOption),
                    disabled: this.isOptionDisabled(processedOption)
                }
            });
        },
        isOptionDisabled(processedOption) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
        },
        getOptionGroupLabel(processedOption) {
            return this.optionGroupLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(processedOption) {
            return processedOption.children;
        },
        isOptionGroup(processedOption) {
            return ObjectUtils.isNotEmpty(processedOption.children);
        },
        isOptionSelected(processedOption) {
            return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
        },
        isOptionActive(processedOption) {
            return this.activeOptionPath.some((path) => path.key === processedOption.key);
        },
        isOptionFocused(processedOption) {
            return this.focusedOptionId === this.getOptionId(processedOption);
        },
        getOptionLabelToRender(processedOption) {
            return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
        },
        onOptionClick(event, processedOption) {
            this.$emit('option-change', { originalEvent: event, processedOption, isFocus: true });
        },
        onOptionMouseMove(event, processedOption) {
            this.$emit('option-focus-change', { originalEvent: event, processedOption });
        },
        onOptionChange(event) {
            this.$emit('option-change', event);
        },
        onOptionFocusChange(event) {
            this.$emit('option-focus-change', event);
        },
        containerRef(el) {
            this.container = el;
        },
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        AngleRightIcon: AngleRightIcon
    }
};
</script>
