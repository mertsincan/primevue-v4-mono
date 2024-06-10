import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SearchPlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchPlusIcon: GlobalComponentConstructor<SearchPlusIcon>;
    }
}

export default SearchPlusIcon;
