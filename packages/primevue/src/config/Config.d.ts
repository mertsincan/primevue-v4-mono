import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../../../primevue-lab/src/accordion/Accordion';
import { AccordionContentPassThroughOptions } from '../../../primevue-lab/src/accordioncontent/AccordionContent';
import { AccordionHeaderPassThroughOptions } from '../../../primevue-lab/src/accordionheader/AccordionHeader';
import { AccordionPanelPassThroughOptions } from '../../../primevue-lab/src/accordionpanel/AccordionPanel';
import { AccordionTabPassThroughOptions } from '../../../primevue-lab/src/accordiontab/AccordionTab';
import { AnimateOnScrollDirectivePassThroughOptions } from '../../../primevue-lab/src/animateonscroll/AnimateOnScroll';
import { AutoCompletePassThroughOptions } from '../../../primevue-lab/src/autocomplete/AutoComplete';
import { AvatarPassThroughOptions } from '../../../primevue-lab/src/avatar/Avatar';
import { AvatarGroupPassThroughOptions } from '../../../primevue-lab/src/avatargroup/AvatarGroup';
import { BadgePassThroughOptions } from '../../../primevue-lab/src/badge/Badge';
import { BadgeDirectivePassThroughOptions } from '../../../primevue-lab/src/badgedirective/BadgeDirective';
import { BlockUIPassThroughOptions } from '../../../primevue-lab/src/blockui/BlockUI';
import { BreadcrumbPassThroughOptions } from '../../../primevue-lab/src/breadcrumb/Breadcrumb';
import { ButtonPassThroughOptions } from '../../../primevue-lab/src/button/Button';
import { CalendarPassThroughOptions } from '../../../primevue-lab/src/calendar/Calendar';
import { CardPassThroughOptions } from '../../../primevue-lab/src/card/Card';
import { CarouselPassThroughOptions } from '../../../primevue-lab/src/carousel/Carousel';
import { CascadeSelectPassThroughOptions } from '../../../primevue-lab/src/cascadeselect/CascadeSelect';
import { ChartPassThroughOptions } from '../../../primevue-lab/src/chart/Chart';
import { CheckboxPassThroughOptions } from '../../../primevue-lab/src/checkbox/Checkbox';
import { ChipPassThroughOptions } from '../../../primevue-lab/src/chip/Chip';
import { ChipsPassThroughOptions } from '../../../primevue-lab/src/chips/Chips';
import { ColorPickerPassThroughOptions } from '../../../primevue-lab/src/colorpicker/ColorPicker';
import { ColumnPassThroughOptions } from '../../../primevue-lab/src/column/Column';
import { ColumnGroupPassThroughOptions } from '../../../primevue-lab/src/columngroup/ColumnGroup';
import { ConfirmDialogPassThroughOptions } from '../../../primevue-lab/src/confirmdialog/ConfirmDialog';
import { ConfirmPopupPassThroughOptions } from '../../../primevue-lab/src/confirmpopup/ConfirmPopup';
import { ContextMenuPassThroughOptions } from '../../../primevue-lab/src/contextmenu/ContextMenu';
import { DataTablePassThroughOptions } from '../../../primevue-lab/src/datatable/DataTable';
import { DataViewPassThroughOptions } from '../../../primevue-lab/src/dataview/DataView';
import { DatePickerPassThroughOptions } from '../../../primevue-lab/src/datepicker/DatePicker';
import { DeferredContentPassThroughOptions } from '../../../primevue-lab/src/deferredcontent/DeferredContent';
import { DialogPassThroughOptions } from '../../../primevue-lab/src/dialog/Dialog';
import { DividerPassThroughOptions } from '../../../primevue-lab/src/divider/Divider';
import { DockPassThroughOptions } from '../../../primevue-lab/src/dock/Dock';
import { DrawerPassThroughOptions } from '../../../primevue-lab/src/drawer/Drawer';
import { DropdownPassThroughOptions } from '../../../primevue-lab/src/dropdown/Dropdown';
import { EditorPassThroughOptions } from '../../../primevue-lab/src/editor/Editor';
import { FieldsetPassThroughOptions } from '../../../primevue-lab/src/fieldset/Fieldset';
import { FileUploadPassThroughOptions } from '../../../primevue-lab/src/fileupload/FileUpload';
import { FocusTrapDirectivePassThroughOptions } from '../../../primevue-lab/src/focustrap/FocusTrap';
import { GalleriaPassThroughOptions } from '../../../primevue-lab/src/galleria/Galleria';
import { ImagePassThroughOptions } from '../../../primevue-lab/src/image/Image';
import { InlineMessagePassThroughOptions } from '../../../primevue-lab/src/inlinemessage/InlineMessage';
import { InplacePassThroughOptions } from '../../../primevue-lab/src/inplace/Inplace';
import { InputChipsPassThroughOptions } from '../../../primevue-lab/src/inputchips/InputChips';
import { InputMaskPassThroughOptions } from '../../../primevue-lab/src/inputmask/InputMask';
import { InputNumberPassThroughOptions } from '../../../primevue-lab/src/inputnumber/InputNumber';
import { InputSwitchPassThroughOptions } from '../../../primevue-lab/src/inputswitch/InputSwitch';
import { InputTextPassThroughOptions } from '../../../primevue-lab/src/inputtext/InputText';
import { KnobPassThroughOptions } from '../../../primevue-lab/src/knob/Knob';
import { ListboxPassThroughOptions } from '../../../primevue-lab/src/listbox/Listbox';
import { MegaMenuPassThroughOptions } from '../../../primevue-lab/src/megamenu/MegaMenu';
import { MenuPassThroughOptions } from '../../../primevue-lab/src/menu/Menu';
import { MenubarPassThroughOptions } from '../../../primevue-lab/src/menubar/Menubar';
import { MessagePassThroughOptions } from '../../../primevue-lab/src/message/Message';
import { MultiSelectPassThroughOptions } from '../../../primevue-lab/src/multiselect/MultiSelect';
import { OrderListPassThroughOptions } from '../../../primevue-lab/src/orderlist/OrderList';
import { OrganizationChartPassThroughOptions } from '../../../primevue-lab/src/organizationchart/OrganizationChart';
import { OverlayPanelPassThroughOptions } from '../../../primevue-lab/src/overlaypanel/OverlayPanel';
import { PaginatorPassThroughOptions } from '../../../primevue-lab/src/paginator/Paginator';
import { PanelPassThroughOptions } from '../../../primevue-lab/src/panel/Panel';
import { PanelMenuPassThroughOptions } from '../../../primevue-lab/src/panelmenu/PanelMenu';
import { PassThroughOptions } from '../../../primevue-lab/src/passthrough';
import { PasswordPassThroughOptions } from '../../../primevue-lab/src/password/Password';
import { PickListPassThroughOptions } from '../../../primevue-lab/src/picklist/PickList';
import { PopoverPassThroughOptions } from '../../../primevue-lab/src/popover/Popover';
import { ProgressBarPassThroughOptions } from '../../../primevue-lab/src/progressbar/ProgressBar';
import { ProgressSpinnerPassThroughOptions } from '../../../primevue-lab/src/progressspinner/ProgressSpinner';
import { RadioButtonPassThroughOptions } from '../../../primevue-lab/src/radiobutton/RadioButton';
import { RatingPassThroughOptions } from '../../../primevue-lab/src/rating/Rating';
import { RippleDirectivePassThroughOptions } from '../../../primevue-lab/src/ripple/Ripple';
import { RowPassThroughOptions } from '../../../primevue-lab/src/row/Row';
import { ScrollPanelPassThroughOptions } from '../../../primevue-lab/src/scrollpanel/ScrollPanel';
import { ScrollTopPassThroughOptions } from '../../../primevue-lab/src/scrolltop/ScrollTop';
import { SelectPassThroughOptions } from '../../../primevue-lab/src/select/Select';
import { SelectButtonPassThroughOptions } from '../../../primevue-lab/src/selectbutton/SelectButton';
import { SidebarPassThroughOptions } from '../../../primevue-lab/src/sidebar/Sidebar';
import { SkeletonPassThroughOptions } from '../../../primevue-lab/src/skeleton/Skeleton';
import { SliderPassThroughOptions } from '../../../primevue-lab/src/slider/Slider';
import { SpeedDialPassThroughOptions } from '../../../primevue-lab/src/speeddial/SpeedDial';
import { SplitButtonPassThroughOptions } from '../../../primevue-lab/src/splitbutton/SplitButton';
import { SplitterPassThroughOptions } from '../../../primevue-lab/src/splitter/Splitter';
import { SplitterPanelPassThroughOptions } from '../../../primevue-lab/src/splitterpanel/SplitterPanel';
import { StepsPassThroughOptions } from '../../../primevue-lab/src/steps/Steps';
import { StyleClassDirectivePassThroughOptions } from '../../../primevue-lab/src/styleclass/StyleClass';
import { TabPassThroughOptions } from '../../../primevue-lab/src/tab/Tab';
import { TabListPassThroughOptions } from '../../../primevue-lab/src/tablist/TabList';
import { TabMenuPassThroughOptions } from '../../../primevue-lab/src/tabmenu/TabMenu';
import { TabPanelPassThroughOptions } from '../../../primevue-lab/src/tabpanel/TabPanel';
import { TabPanelsPassThroughOptions } from '../../../primevue-lab/src/tabpanels/TabPanels';
import { TabsPassThroughOptions } from '../../../primevue-lab/src/tabs/Tabs';
import { TabViewPassThroughOptions } from '../../../primevue-lab/src/tabview/TabView';
import { TagPassThroughOptions } from '../../../primevue-lab/src/tag/Tag';
import { TerminalPassThroughOptions } from '../../../primevue-lab/src/terminal/Terminal';
import { TextareaPassThroughOptions } from '../../../primevue-lab/src/textarea/Textarea';
import { TieredMenuPassThroughOptions } from '../../../primevue-lab/src/tieredmenu/TieredMenu';
import { TimelinePassThroughOptions } from '../../../primevue-lab/src/timeline/Timeline';
import { ToastPassThroughOptions } from '../../../primevue-lab/src/toast/Toast';
import { ToggleButtonPassThroughOptions } from '../../../primevue-lab/src/togglebutton/ToggleButton';
import { ToggleSwitchPassThroughOptions } from '../../../primevue-lab/src/toggleswitch/ToggleSwitch';
import { ToolbarPassThroughOptions } from '../../../primevue-lab/src/toolbar/Toolbar';
import { TooltipDirectivePassThroughOptions } from '../../../primevue-lab/src/tooltip/Tooltip';
import { TreePassThroughOptions } from '../../../primevue-lab/src/tree/Tree';
import { TreeSelectPassThroughOptions } from '../../../primevue-lab/src/treeselect/TreeSelect';
import { TreeTablePassThroughOptions } from '../../../primevue-lab/src/treetable/TreeTable';
import { DefaultPassThrough, PassThrough } from '../../../primevue-lab/src/ts-helpers';
import { VirtualScrollerPassThroughOptions } from '../../../primevue-lab/src/virtualscroller/VirtualScroller';

export interface primevue-labConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: primevue-labLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: primevue-labZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<primevue-labPTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: primevue-labCSPOptions;
}

export declare const defaultOptions: primevue-labConfiguration;

export interface primevue-labZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

export interface primevue-labCSPOptions {
    nonce?: string;
}

export interface primevue-labPTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        animate?: AnimateOnScrollDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}

export interface primevue-labLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
    listLabel?: string;
}

export interface primevue-labLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    fileSizeTypes: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    showMonthAfterYear?: boolean;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    fileChosenMessage?: string;
    noFileChosenMessage?: string;
    aria?: primevue-labLocaleAriaOptions;
}

export declare function useprimevue-lab(): {
    config: primevue-labConfiguration;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue-lab: {
            config: primevue-labConfiguration;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $primevue-lab: {
            config: primevue-labConfiguration;
        };
    }
}
