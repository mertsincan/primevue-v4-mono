<template>
    <span :class="cx('current')" v-bind="ptm('current')">{{ text }}</span>
</template>

<script>
import BaseComponent from '@primevuelab/core/basecomponent';

export default {
    name: 'CurrentPageReport',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        pageCount: {
            type: Number,
            default: 0
        },
        currentPage: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        rows: {
            type: Number,
            default: 0
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        template: {
            type: String,
            default: '({currentPage} of {totalPages})'
        }
    },
    computed: {
        text() {
            let text = this.template
                .replace('{currentPage}', this.currentPage)
                .replace('{totalPages}', this.pageCount)
                .replace('{first}', this.pageCount > 0 ? this.first + 1 : 0)
                .replace('{last}', Math.min(this.first + this.rows, this.totalRecords))
                .replace('{rows}', this.rows)
                .replace('{totalRecords}', this.totalRecords);

            return text;
        }
    }
};
</script>
