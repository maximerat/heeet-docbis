
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppFooter': typeof import("../app/components/AppFooter.vue")['default']
    'AppHeader': typeof import("../app/components/AppHeader.vue")['default']
    'LogoPro': typeof import("../app/components/LogoPro.vue")['default']
    'TemplateMenu': typeof import("../app/components/TemplateMenu.vue")['default']
    'UAccordion': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
    'UAlert': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
    'UApp': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
    'UAvatar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
    'UAvatarGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
    'UBadge': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
    'UBreadcrumb': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
    'UButton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
    'UButtonGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
    'UCalendar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
    'UCard': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
    'UCarousel': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
    'UCheckbox': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
    'UCheckboxGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
    'UChip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
    'UCollapsible': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
    'UColorPicker': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
    'UCommandPalette': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
    'UContainer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
    'UContextMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
    'UContextMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
    'UDrawer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
    'UDropdownMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
    'UDropdownMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
    'UForm': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
    'UFormField': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
    'UIcon': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
    'UInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
    'UInputMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
    'UInputNumber': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
    'UInputTags': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']
    'UKbd': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
    'ULink': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
    'ULinkBase': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
    'UModal': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
    'UNavigationMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
    'UOverlayProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
    'UPagination': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
    'UPinInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
    'UPopover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
    'UProgress': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
    'URadioGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
    'USelect': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
    'USelectMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
    'USeparator': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
    'USkeleton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
    'USlideover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
    'USlider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
    'UStepper': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
    'USwitch': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
    'UTable': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
    'UTabs': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
    'UTextarea': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
    'UTimeline': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']
    'UToast': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
    'UToaster': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
    'UTooltip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
    'UTree': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue")['default']
    'ProseAccordion': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue")['default']
    'ProseAccordionItem': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/AccordionItem.vue")['default']
    'ProseBadge': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Badge.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Blockquote.vue")['default']
    'ProseCallout': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue")['default']
    'ProseCard': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue")['default']
    'ProseCardGroup': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CardGroup.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Code.vue")['default']
    'ProseCodeCollapse': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue")['default']
    'ProseCodeGroup': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue")['default']
    'ProseCodeIcon': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue")['default']
    'ProseCodePreview': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodePreview.vue")['default']
    'ProseCodeTree': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue")['default']
    'ProseCollapsible': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Em.vue")['default']
    'ProseField': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue")['default']
    'ProseFieldGroup': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/FieldGroup.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Hr.vue")['default']
    'ProseIcon': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Icon.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Img.vue")['default']
    'ProseKbd': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Kbd.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Li.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ol.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/P.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Script.vue")['default']
    'ProseSteps': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Steps.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Strong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Table.vue")['default']
    'ProseTabs': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue")['default']
    'ProseTabsItem': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/TabsItem.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Td.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Th.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Thead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ul.vue")['default']
    'ProseCaution': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Caution.vue")['default']
    'ProseNote': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Note.vue")['default']
    'ProseTip': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Tip.vue")['default']
    'ProseWarning': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Warning.vue")['default']
    'UContentNavigation': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentNavigation.vue")['default']
    'UContentSearch': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearch.vue")['default']
    'UContentSearchButton': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearchButton.vue")['default']
    'UContentSurround': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue")['default']
    'UContentToc': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue")['default']
    'UColorModeAvatar': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']
    'UColorModeButton': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeButton.vue")['default']
    'UColorModeImage': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeImage.vue")['default']
    'UColorModeSelect': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']
    'UColorModeSwitch': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']
    'UAuthForm': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue")['default']
    'UBanner': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Banner.vue")['default']
    'UBlogPost': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue")['default']
    'UBlogPosts': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue")['default']
    'UChangelogVersion': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersion.vue")['default']
    'UChangelogVersions': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersions.vue")['default']
    'UChatMessage': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessage.vue")['default']
    'UChatMessages': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessages.vue")['default']
    'UChatPalette': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPalette.vue")['default']
    'UChatPrompt': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPrompt.vue")['default']
    'UChatPromptSubmit': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPromptSubmit.vue")['default']
    'UDashboardGroup': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardGroup.vue")['default']
    'UDashboardNavbar': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardNavbar.vue")['default']
    'UDashboardPanel': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardPanel.vue")['default']
    'UDashboardResizeHandle': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardResizeHandle.vue")['default']
    'UDashboardSearch': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearch.vue")['default']
    'UDashboardSearchButton': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearchButton.vue")['default']
    'UDashboardSidebar': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebar.vue")['default']
    'UDashboardSidebarCollapse': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue")['default']
    'UDashboardSidebarToggle': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarToggle.vue")['default']
    'UDashboardToolbar': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue")['default']
    'UError': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Error.vue")['default']
    'UFooter': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Footer.vue")['default']
    'UFooterColumns': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/FooterColumns.vue")['default']
    'UHeader': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Header.vue")['default']
    'UMain': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Main.vue")['default']
    'UPage': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Page.vue")['default']
    'UPageAccordion': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue")['default']
    'UPageAnchors': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAnchors.vue")['default']
    'UPageAside': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue")['default']
    'UPageBody': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageBody.vue")['default']
    'UPageCTA': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue")['default']
    'UPageCard': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue")['default']
    'UPageColumns': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageColumns.vue")['default']
    'UPageFeature': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageFeature.vue")['default']
    'UPageGrid': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageGrid.vue")['default']
    'UPageHeader': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue")['default']
    'UPageHero': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue")['default']
    'UPageLinks': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLinks.vue")['default']
    'UPageList': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageList.vue")['default']
    'UPageLogos': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLogos.vue")['default']
    'UPageMarquee': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue")['default']
    'UPageSection': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageSection.vue")['default']
    'UPricingPlan': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue")['default']
    'UPricingPlans': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue")['default']
    'UPricingTable': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingTable.vue")['default']
    'UUser': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue")['default']
    'ULocaleSelect': typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/locale/LocaleSelect.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCCached': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppFooter': LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
    'LazyLogoPro': LazyComponent<typeof import("../app/components/LogoPro.vue")['default']>
    'LazyTemplateMenu': LazyComponent<typeof import("../app/components/TemplateMenu.vue")['default']>
    'LazyUAccordion': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
    'LazyUAlert': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
    'LazyUApp': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
    'LazyUAvatar': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
    'LazyUAvatarGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
    'LazyUBadge': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
    'LazyUBreadcrumb': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
    'LazyUButton': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
    'LazyUButtonGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']>
    'LazyUCalendar': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
    'LazyUCard': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
    'LazyUCarousel': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
    'LazyUCheckbox': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
    'LazyUCheckboxGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
    'LazyUChip': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
    'LazyUCollapsible': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
    'LazyUColorPicker': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
    'LazyUCommandPalette': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
    'LazyUContainer': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
    'LazyUContextMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
    'LazyUContextMenuContent': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
    'LazyUDrawer': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
    'LazyUDropdownMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
    'LazyUDropdownMenuContent': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
    'LazyUForm': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
    'LazyUFormField': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
    'LazyUIcon': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
    'LazyUInput': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
    'LazyUInputMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
    'LazyUInputNumber': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
    'LazyUInputTags': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']>
    'LazyUKbd': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
    'LazyULink': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
    'LazyULinkBase': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
    'LazyUModal': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
    'LazyUNavigationMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
    'LazyUOverlayProvider': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
    'LazyUPagination': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
    'LazyUPinInput': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
    'LazyUPopover': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
    'LazyUProgress': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
    'LazyURadioGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
    'LazyUSelect': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
    'LazyUSelectMenu': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
    'LazyUSeparator': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
    'LazyUSkeleton': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
    'LazyUSlideover': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
    'LazyUSlider': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
    'LazyUStepper': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
    'LazyUSwitch': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
    'LazyUTable': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
    'LazyUTabs': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
    'LazyUTextarea': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
    'LazyUTimeline': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']>
    'LazyUToast': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
    'LazyUToaster': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
    'LazyUTooltip': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
    'LazyUTree': LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue")['default']>
    'LazyProseAccordion': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue")['default']>
    'LazyProseAccordionItem': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/AccordionItem.vue")['default']>
    'LazyProseBadge': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Badge.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Blockquote.vue")['default']>
    'LazyProseCallout': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue")['default']>
    'LazyProseCard': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue")['default']>
    'LazyProseCardGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CardGroup.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Code.vue")['default']>
    'LazyProseCodeCollapse': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue")['default']>
    'LazyProseCodeGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue")['default']>
    'LazyProseCodeIcon': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue")['default']>
    'LazyProseCodePreview': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodePreview.vue")['default']>
    'LazyProseCodeTree': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue")['default']>
    'LazyProseCollapsible': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Em.vue")['default']>
    'LazyProseField': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue")['default']>
    'LazyProseFieldGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/FieldGroup.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Hr.vue")['default']>
    'LazyProseIcon': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Icon.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Img.vue")['default']>
    'LazyProseKbd': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Kbd.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Li.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ol.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/P.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Script.vue")['default']>
    'LazyProseSteps': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Steps.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Strong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Table.vue")['default']>
    'LazyProseTabs': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue")['default']>
    'LazyProseTabsItem': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/TabsItem.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Td.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Th.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Thead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ul.vue")['default']>
    'LazyProseCaution': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Caution.vue")['default']>
    'LazyProseNote': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Note.vue")['default']>
    'LazyProseTip': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Tip.vue")['default']>
    'LazyProseWarning': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Warning.vue")['default']>
    'LazyUContentNavigation': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentNavigation.vue")['default']>
    'LazyUContentSearch': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearch.vue")['default']>
    'LazyUContentSearchButton': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearchButton.vue")['default']>
    'LazyUContentSurround': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue")['default']>
    'LazyUContentToc': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue")['default']>
    'LazyUColorModeAvatar': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']>
    'LazyUColorModeButton': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeButton.vue")['default']>
    'LazyUColorModeImage': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeImage.vue")['default']>
    'LazyUColorModeSelect': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']>
    'LazyUColorModeSwitch': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']>
    'LazyUAuthForm': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue")['default']>
    'LazyUBanner': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Banner.vue")['default']>
    'LazyUBlogPost': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue")['default']>
    'LazyUBlogPosts': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue")['default']>
    'LazyUChangelogVersion': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersion.vue")['default']>
    'LazyUChangelogVersions': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersions.vue")['default']>
    'LazyUChatMessage': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessage.vue")['default']>
    'LazyUChatMessages': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessages.vue")['default']>
    'LazyUChatPalette': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPalette.vue")['default']>
    'LazyUChatPrompt': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPrompt.vue")['default']>
    'LazyUChatPromptSubmit': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPromptSubmit.vue")['default']>
    'LazyUDashboardGroup': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardGroup.vue")['default']>
    'LazyUDashboardNavbar': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardNavbar.vue")['default']>
    'LazyUDashboardPanel': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardPanel.vue")['default']>
    'LazyUDashboardResizeHandle': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardResizeHandle.vue")['default']>
    'LazyUDashboardSearch': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearch.vue")['default']>
    'LazyUDashboardSearchButton': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearchButton.vue")['default']>
    'LazyUDashboardSidebar': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebar.vue")['default']>
    'LazyUDashboardSidebarCollapse': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue")['default']>
    'LazyUDashboardSidebarToggle': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarToggle.vue")['default']>
    'LazyUDashboardToolbar': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue")['default']>
    'LazyUError': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Error.vue")['default']>
    'LazyUFooter': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Footer.vue")['default']>
    'LazyUFooterColumns': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/FooterColumns.vue")['default']>
    'LazyUHeader': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Header.vue")['default']>
    'LazyUMain': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Main.vue")['default']>
    'LazyUPage': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Page.vue")['default']>
    'LazyUPageAccordion': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue")['default']>
    'LazyUPageAnchors': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAnchors.vue")['default']>
    'LazyUPageAside': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue")['default']>
    'LazyUPageBody': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageBody.vue")['default']>
    'LazyUPageCTA': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue")['default']>
    'LazyUPageCard': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue")['default']>
    'LazyUPageColumns': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageColumns.vue")['default']>
    'LazyUPageFeature': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageFeature.vue")['default']>
    'LazyUPageGrid': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageGrid.vue")['default']>
    'LazyUPageHeader': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue")['default']>
    'LazyUPageHero': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue")['default']>
    'LazyUPageLinks': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLinks.vue")['default']>
    'LazyUPageList': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageList.vue")['default']>
    'LazyUPageLogos': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLogos.vue")['default']>
    'LazyUPageMarquee': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue")['default']>
    'LazyUPageSection': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageSection.vue")['default']>
    'LazyUPricingPlan': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue")['default']>
    'LazyUPricingPlans': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue")['default']>
    'LazyUPricingTable': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingTable.vue")['default']>
    'LazyUUser': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue")['default']>
    'LazyULocaleSelect': LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/locale/LocaleSelect.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCCached': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppHeader: typeof import("../app/components/AppHeader.vue")['default']
export const LogoPro: typeof import("../app/components/LogoPro.vue")['default']
export const TemplateMenu: typeof import("../app/components/TemplateMenu.vue")['default']
export const UAccordion: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
export const UAlert: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
export const UApp: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
export const UAvatar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
export const UAvatarGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
export const UBadge: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
export const UBreadcrumb: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
export const UButton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
export const UButtonGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
export const UCalendar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
export const UCard: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
export const UCarousel: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
export const UCheckbox: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
export const UCheckboxGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
export const UChip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
export const UCollapsible: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
export const UColorPicker: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
export const UCommandPalette: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
export const UContainer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
export const UContextMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
export const UContextMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
export const UDrawer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
export const UDropdownMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
export const UDropdownMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
export const UForm: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
export const UFormField: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
export const UIcon: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
export const UInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
export const UInputMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
export const UInputNumber: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
export const UInputTags: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']
export const UKbd: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
export const ULink: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
export const ULinkBase: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
export const UModal: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
export const UNavigationMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
export const UOverlayProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
export const UPagination: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
export const UPinInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
export const UPopover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
export const UProgress: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
export const URadioGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
export const USelect: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
export const USelectMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
export const USeparator: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
export const USkeleton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
export const USlideover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
export const USlider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
export const UStepper: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
export const USwitch: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
export const UTable: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
export const UTabs: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
export const UTextarea: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
export const UTimeline: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']
export const UToast: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
export const UToaster: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
export const UTooltip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
export const UTree: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue")['default']
export const ProseAccordion: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue")['default']
export const ProseAccordionItem: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/AccordionItem.vue")['default']
export const ProseBadge: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Badge.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Blockquote.vue")['default']
export const ProseCallout: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue")['default']
export const ProseCard: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue")['default']
export const ProseCardGroup: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CardGroup.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Code.vue")['default']
export const ProseCodeCollapse: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue")['default']
export const ProseCodeGroup: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue")['default']
export const ProseCodeIcon: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue")['default']
export const ProseCodePreview: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodePreview.vue")['default']
export const ProseCodeTree: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue")['default']
export const ProseCollapsible: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Em.vue")['default']
export const ProseField: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue")['default']
export const ProseFieldGroup: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/FieldGroup.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Hr.vue")['default']
export const ProseIcon: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Icon.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Img.vue")['default']
export const ProseKbd: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Kbd.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Li.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ol.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/P.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Script.vue")['default']
export const ProseSteps: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Steps.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Strong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Table.vue")['default']
export const ProseTabs: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue")['default']
export const ProseTabsItem: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/TabsItem.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Td.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Th.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Thead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ul.vue")['default']
export const ProseCaution: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Caution.vue")['default']
export const ProseNote: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Note.vue")['default']
export const ProseTip: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Tip.vue")['default']
export const ProseWarning: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Warning.vue")['default']
export const UContentNavigation: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentNavigation.vue")['default']
export const UContentSearch: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearch.vue")['default']
export const UContentSearchButton: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearchButton.vue")['default']
export const UContentSurround: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue")['default']
export const UContentToc: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue")['default']
export const UColorModeAvatar: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']
export const UColorModeButton: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeButton.vue")['default']
export const UColorModeImage: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeImage.vue")['default']
export const UColorModeSelect: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']
export const UColorModeSwitch: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']
export const UAuthForm: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue")['default']
export const UBanner: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Banner.vue")['default']
export const UBlogPost: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue")['default']
export const UBlogPosts: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue")['default']
export const UChangelogVersion: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersion.vue")['default']
export const UChangelogVersions: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersions.vue")['default']
export const UChatMessage: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessage.vue")['default']
export const UChatMessages: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessages.vue")['default']
export const UChatPalette: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPalette.vue")['default']
export const UChatPrompt: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPrompt.vue")['default']
export const UChatPromptSubmit: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPromptSubmit.vue")['default']
export const UDashboardGroup: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardGroup.vue")['default']
export const UDashboardNavbar: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardNavbar.vue")['default']
export const UDashboardPanel: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardPanel.vue")['default']
export const UDashboardResizeHandle: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardResizeHandle.vue")['default']
export const UDashboardSearch: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearch.vue")['default']
export const UDashboardSearchButton: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearchButton.vue")['default']
export const UDashboardSidebar: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebar.vue")['default']
export const UDashboardSidebarCollapse: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue")['default']
export const UDashboardSidebarToggle: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarToggle.vue")['default']
export const UDashboardToolbar: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue")['default']
export const UError: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Error.vue")['default']
export const UFooter: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Footer.vue")['default']
export const UFooterColumns: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/FooterColumns.vue")['default']
export const UHeader: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Header.vue")['default']
export const UMain: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Main.vue")['default']
export const UPage: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Page.vue")['default']
export const UPageAccordion: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue")['default']
export const UPageAnchors: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAnchors.vue")['default']
export const UPageAside: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue")['default']
export const UPageBody: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageBody.vue")['default']
export const UPageCTA: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue")['default']
export const UPageCard: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue")['default']
export const UPageColumns: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageColumns.vue")['default']
export const UPageFeature: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageFeature.vue")['default']
export const UPageGrid: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageGrid.vue")['default']
export const UPageHeader: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue")['default']
export const UPageHero: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue")['default']
export const UPageLinks: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLinks.vue")['default']
export const UPageList: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageList.vue")['default']
export const UPageLogos: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLogos.vue")['default']
export const UPageMarquee: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue")['default']
export const UPageSection: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageSection.vue")['default']
export const UPricingPlan: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue")['default']
export const UPricingPlans: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue")['default']
export const UPricingTable: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingTable.vue")['default']
export const UUser: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue")['default']
export const ULocaleSelect: typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/locale/LocaleSelect.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCCached: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
export const LazyLogoPro: LazyComponent<typeof import("../app/components/LogoPro.vue")['default']>
export const LazyTemplateMenu: LazyComponent<typeof import("../app/components/TemplateMenu.vue")['default']>
export const LazyUAccordion: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
export const LazyUAlert: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
export const LazyUApp: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
export const LazyUAvatar: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
export const LazyUAvatarGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
export const LazyUBadge: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
export const LazyUBreadcrumb: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
export const LazyUButton: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
export const LazyUButtonGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']>
export const LazyUCalendar: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
export const LazyUCard: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
export const LazyUCarousel: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
export const LazyUCheckbox: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
export const LazyUCheckboxGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
export const LazyUChip: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
export const LazyUCollapsible: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
export const LazyUColorPicker: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
export const LazyUCommandPalette: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
export const LazyUContainer: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
export const LazyUContextMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
export const LazyUContextMenuContent: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
export const LazyUDrawer: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
export const LazyUDropdownMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
export const LazyUDropdownMenuContent: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
export const LazyUForm: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
export const LazyUFormField: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
export const LazyUIcon: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
export const LazyUInput: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
export const LazyUInputMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
export const LazyUInputNumber: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
export const LazyUInputTags: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']>
export const LazyUKbd: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
export const LazyULink: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
export const LazyULinkBase: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
export const LazyUModal: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
export const LazyUNavigationMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
export const LazyUOverlayProvider: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
export const LazyUPagination: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
export const LazyUPinInput: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
export const LazyUPopover: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
export const LazyUProgress: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
export const LazyURadioGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
export const LazyUSelect: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
export const LazyUSelectMenu: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
export const LazyUSeparator: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
export const LazyUSkeleton: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
export const LazyUSlideover: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
export const LazyUSlider: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
export const LazyUStepper: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
export const LazyUSwitch: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
export const LazyUTable: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
export const LazyUTabs: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
export const LazyUTextarea: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
export const LazyUTimeline: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']>
export const LazyUToast: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
export const LazyUToaster: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
export const LazyUTooltip: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
export const LazyUTree: LazyComponent<typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue")['default']>
export const LazyProseAccordion: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue")['default']>
export const LazyProseAccordionItem: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/AccordionItem.vue")['default']>
export const LazyProseBadge: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Badge.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Blockquote.vue")['default']>
export const LazyProseCallout: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue")['default']>
export const LazyProseCard: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue")['default']>
export const LazyProseCardGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CardGroup.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Code.vue")['default']>
export const LazyProseCodeCollapse: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue")['default']>
export const LazyProseCodeGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue")['default']>
export const LazyProseCodeIcon: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue")['default']>
export const LazyProseCodePreview: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodePreview.vue")['default']>
export const LazyProseCodeTree: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue")['default']>
export const LazyProseCollapsible: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Em.vue")['default']>
export const LazyProseField: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue")['default']>
export const LazyProseFieldGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/FieldGroup.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Hr.vue")['default']>
export const LazyProseIcon: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Icon.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Img.vue")['default']>
export const LazyProseKbd: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Kbd.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Li.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ol.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/P.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Script.vue")['default']>
export const LazyProseSteps: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Steps.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Strong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Table.vue")['default']>
export const LazyProseTabs: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue")['default']>
export const LazyProseTabsItem: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/TabsItem.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Td.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Th.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Thead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ul.vue")['default']>
export const LazyProseCaution: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Caution.vue")['default']>
export const LazyProseNote: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Note.vue")['default']>
export const LazyProseTip: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Tip.vue")['default']>
export const LazyProseWarning: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Warning.vue")['default']>
export const LazyUContentNavigation: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentNavigation.vue")['default']>
export const LazyUContentSearch: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearch.vue")['default']>
export const LazyUContentSearchButton: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSearchButton.vue")['default']>
export const LazyUContentSurround: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentSurround.vue")['default']>
export const LazyUContentToc: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/content/ContentToc.vue")['default']>
export const LazyUColorModeAvatar: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']>
export const LazyUColorModeButton: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeButton.vue")['default']>
export const LazyUColorModeImage: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeImage.vue")['default']>
export const LazyUColorModeSelect: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']>
export const LazyUColorModeSwitch: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']>
export const LazyUAuthForm: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/AuthForm.vue")['default']>
export const LazyUBanner: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Banner.vue")['default']>
export const LazyUBlogPost: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPost.vue")['default']>
export const LazyUBlogPosts: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/BlogPosts.vue")['default']>
export const LazyUChangelogVersion: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersion.vue")['default']>
export const LazyUChangelogVersions: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChangelogVersions.vue")['default']>
export const LazyUChatMessage: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessage.vue")['default']>
export const LazyUChatMessages: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatMessages.vue")['default']>
export const LazyUChatPalette: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPalette.vue")['default']>
export const LazyUChatPrompt: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPrompt.vue")['default']>
export const LazyUChatPromptSubmit: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/ChatPromptSubmit.vue")['default']>
export const LazyUDashboardGroup: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardGroup.vue")['default']>
export const LazyUDashboardNavbar: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardNavbar.vue")['default']>
export const LazyUDashboardPanel: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardPanel.vue")['default']>
export const LazyUDashboardResizeHandle: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardResizeHandle.vue")['default']>
export const LazyUDashboardSearch: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearch.vue")['default']>
export const LazyUDashboardSearchButton: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSearchButton.vue")['default']>
export const LazyUDashboardSidebar: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebar.vue")['default']>
export const LazyUDashboardSidebarCollapse: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarCollapse.vue")['default']>
export const LazyUDashboardSidebarToggle: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardSidebarToggle.vue")['default']>
export const LazyUDashboardToolbar: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/DashboardToolbar.vue")['default']>
export const LazyUError: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Error.vue")['default']>
export const LazyUFooter: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Footer.vue")['default']>
export const LazyUFooterColumns: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/FooterColumns.vue")['default']>
export const LazyUHeader: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Header.vue")['default']>
export const LazyUMain: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Main.vue")['default']>
export const LazyUPage: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/Page.vue")['default']>
export const LazyUPageAccordion: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAccordion.vue")['default']>
export const LazyUPageAnchors: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAnchors.vue")['default']>
export const LazyUPageAside: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageAside.vue")['default']>
export const LazyUPageBody: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageBody.vue")['default']>
export const LazyUPageCTA: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCTA.vue")['default']>
export const LazyUPageCard: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue")['default']>
export const LazyUPageColumns: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageColumns.vue")['default']>
export const LazyUPageFeature: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageFeature.vue")['default']>
export const LazyUPageGrid: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageGrid.vue")['default']>
export const LazyUPageHeader: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHeader.vue")['default']>
export const LazyUPageHero: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageHero.vue")['default']>
export const LazyUPageLinks: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLinks.vue")['default']>
export const LazyUPageList: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageList.vue")['default']>
export const LazyUPageLogos: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageLogos.vue")['default']>
export const LazyUPageMarquee: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageMarquee.vue")['default']>
export const LazyUPageSection: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PageSection.vue")['default']>
export const LazyUPricingPlan: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlan.vue")['default']>
export const LazyUPricingPlans: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingPlans.vue")['default']>
export const LazyUPricingTable: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/PricingTable.vue")['default']>
export const LazyUUser: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/User.vue")['default']>
export const LazyULocaleSelect: LazyComponent<typeof import("../node_modules/@nuxt/ui-pro/dist/runtime/components/locale/LocaleSelect.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCCached: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
