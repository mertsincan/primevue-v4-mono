import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class FilterSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;
