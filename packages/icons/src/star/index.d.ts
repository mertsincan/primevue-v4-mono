import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class StarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarIcon: GlobalComponentConstructor<StarIcon>;
    }
}

export default StarIcon;
