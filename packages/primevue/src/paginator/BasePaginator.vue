<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import PaginatorStyle from 'primevuelab/paginator/style';

export default {
    name: 'BasePaginator',
    extends: BaseComponent,
    props: {
        totalRecords: {
            type: Number,
            default: 0
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        template: {
            type: [Object, String],
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        currentPageReportTemplate: {
            type: null,
            default: '({currentPage} of {totalPages})'
        },
        alwaysShow: {
            type: Boolean,
            default: true
        }
    },
    style: PaginatorStyle,
    provide() {
        return {
            $pcPaginator: this,
            $parentInstance: this
        };
    }
};
</script>
