
const components = [
    'Accordion',
    'AccordionTab',
    'AutoComplete',
    'Avatar',
    'AvatarGroup',
    'Badge',
    'BlockUI',
    'Breadcrumb',
    'Button',
    'Calendar',
    'Card',
    'Carousel',
    'CascadeSelect',
    'Chart',
    'Checkbox',
    'Chip',
    'Chips',
    'ColorPicker',
    'Column',
    'ColumnGroup',
    // 'ConfirmDialog',
    // 'ConfirmPopup',
    // These must be registered globally in order for the confirm service to work properly
    'ContextMenu',
    'DataTable',
    'DataView',
    'DataViewLayoutOptions',
    'DeferredContent',
    'Dialog',
    'Divider',
    'Dock',
    'Dropdown',
    'Editor',
    'Fieldset',
    'FileUpload',
    'FloatLabel',
    'FullCalendar',
    'Galleria',
    'IconField',
    'IconField',
    'Image',
    'InlineMessage',
    'Inplace',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputOtp',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MegaMenu',
    'Menu',
    'Menubar',
    'Message',
    'MeterGroup',
    'MultiSelect',
    'OrderList',
    'OrganizationChart',
    'OverlayPanel',
    'Paginator',
    'Panel',
    'PanelMenu',
    'Password',
    'PickList',
    'ProgressBar',
    'ProgressSpinner',
    'RadioButton',
    'Rating',
    'Row',
    'ScrollPanel',
    'ScrollTop',
    'SelectButton',
    'Sidebar',
    'Skeleton',
    'Slider',
    'SpeedDial',
    'SplitButton',
    'Splitter',
    'SplitterPanel',
    'Stepper',
    'StepperPanel',
    'Steps',
    'TabMenu',
    'TabPanel',
    'TabView',
    'Tag',
    'Terminal',
    'TerminalService',
    'Textarea',
    'TieredMenu',
    'Timeline',
    'Timelist',
    // 'Toast',
    // Toast must be registered globally in order for the toast service to work properly
    'ToggleButton',
    'Toolbar',
    // 'Tooltip',
    // Tooltip must be registered globally in order for the tooltip service to work properly
    'Tree',
    'TreeSelect',
    'TreeTable',
    'TriStateCheckbox',
    'VirtualScroller'
];

export interface primevue-labResolverOptions {
    prefix?: string;
}

export function primevue-labResolver(options: primevue-labResolverOptions = {}): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (options.prefix) {
                if (!name.startsWith(options.prefix)) return;

                name = name.substring(options.prefix.length);
            }

            if (components.includes(name)) {
                return {
                    from: `primevue-lab/${name.toLowerCase()}`
                };
            }
        }
    };
}
