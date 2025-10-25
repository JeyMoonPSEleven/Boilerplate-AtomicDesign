// src/types/index.ts
import React from 'react';

// Button Types
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isFullWidth?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    href?: string;
    isExternal?: boolean;
}

// Text Types
export type TextVariant = 'body' | 'caption' | 'small' | 'large';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: TextVariant;
    color?: TextColor;
    children: React.ReactNode;
}

// Heading Types
export type HeadingVariant = 'display' | 'heading' | 'subheading';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: HeadingVariant;
    children: React.ReactNode;
}

// Card Types
export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    children: React.ReactNode;
}

// Form Types
export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: Record<string, string>) => void;
    validation?: boolean;
    children: React.ReactNode;
}

// Header Types
export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    logoText?: string;
    navigation?: NavigationItem[];
    ctaText?: string;
    ctaHref?: string;
    phone?: string;
    address?: string;
    variant?: 'default' | 'minimal' | 'centered';
}

// Input Types
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
}

// Icon Types
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name?: string;
    children?: React.ReactNode;
}

// Badge Types
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
    pill?: boolean;
    children: React.ReactNode;
}

// Checkbox Types
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
}

// Link Types
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    underline?: boolean;
    external?: boolean;
    children: React.ReactNode;
}

// Progress Types
export interface ProgressProps {
    value: number;
    max?: number;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    showValue?: boolean;
    label?: string;
    className?: string;
}

// Spinner Types
export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    text?: string;
    className?: string;
}

// Divider Types
export interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    thickness?: 'thin' | 'medium' | 'thick';
    className?: string;
}

// Alert Types
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'danger' | 'warning' | 'info';
    title?: string;
    message: string;
    dismissible?: boolean;
    onDismiss?: () => void;
}

// Modal Types
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    children: React.ReactNode;
}

// Tabs Types
export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TabItem[];
    defaultActiveTab?: string;
    variant?: 'default' | 'pills' | 'underline';
    onTabChange?: (tabId: string) => void;
}

// Toast Types
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'danger' | 'warning' | 'info';
    title?: string;
    message: string;
    duration?: number;
    onClose?: () => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

// Avatar Types
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    fallback?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

// Image Types
export interface ImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    overlay?: boolean;
    overlayOpacity?: number;
    loading?: 'lazy' | 'eager';
    className?: string;
    onClick?: () => void;
    onLoad?: () => void;
    onError?: () => void;
}

// Radio Types
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

// Select Types
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> {
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

// Switch Types
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

// Slider Types
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    showValue?: boolean;
    className?: string;
}

// Logo Types
export interface LogoProps {
    src?: string;
    alt?: string;
    text?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    className?: string;
    onClick?: () => void;
    href?: string;
}

// Video Types
export interface VideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'onPlay' | 'onPause' | 'onEnded'> {
    src: string;
    poster?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    className?: string;
}

// ColorSwatch Types
export interface ColorSwatchProps {
    color: string;
    name?: string;
    size?: 'small' | 'medium' | 'large';
    showName?: boolean;
    className?: string;
    onClick?: (color: string) => void;
    selected?: boolean;
}

// FileUpload Types
export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    accept?: string;
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    dragAndDrop?: boolean;
}

// Dropdown Types
export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: string;
}

export interface DropdownProps {
    label?: string;
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    searchable?: boolean;
}

// Organisms Types
export interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    ctaText?: string;
    ctaHref?: string;
    variant?: 'default' | 'centered' | 'minimal';
    className?: string;
}

export interface FooterProps {
    logo?: string;
    logoText?: string;
    links?: Array<{
        title: string;
        items: Array<{
            label: string;
            href: string;
        }>;
    }>;
    socialLinks?: Array<{
        name: string;
        href: string;
        icon: React.ReactNode;
    }>;
    copyright?: string;
    className?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    consent: boolean;
}

export interface ContactInfo {
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
}

export interface ServiceOption {
    value: string;
    label: string;
}

export interface ContactFormProps {
    title?: string;
    subtitle?: string;
    showContactInfo?: boolean;
    contactInfo?: ContactInfo;
    services?: ServiceOption[];
    onSubmit?: (data: ContactFormData) => void;
    className?: string;
}

export interface NewsletterProps {
    title?: string;
    subtitle?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
    variant?: 'default' | 'centered' | 'minimal' | 'inline';
    showBenefits?: boolean;
    benefits?: string[];
    className?: string;
}

export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    currency?: string;
    period?: string;
    features: string[];
    isPopular?: boolean;
    isRecommended?: boolean;
    buttonText?: string;
    buttonVariant?: 'primary' | 'secondary' | 'outline';
}

export interface PricingProps {
    title?: string;
    subtitle?: string;
    description?: string;
    plans: PricingPlan[];
    onSelectPlan?: (plan: PricingPlan) => void;
    variant?: 'default' | 'centered' | 'minimal';
    showCurrency?: boolean;
    showPeriod?: boolean;
    className?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    content: string;
    rating: number;
    avatar?: string;
    location?: string;
    caseType?: string;
    compensation?: string;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'carousel' | 'grid';
    showRating?: boolean;
    showNavigation?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export interface FAQProps {
    items: FAQItem[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'grouped' | 'searchable';
    className?: string;
    showCategories?: boolean;
}

export interface Statistic {
    id: string;
    value: string;
    label: string;
    icon?: React.ReactNode;
    change?: {
        value: string;
        type: 'increase' | 'decrease';
    };
    description?: string;
}

export interface StatisticsProps {
    statistics: Statistic[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'grid' | 'carousel' | 'minimal';
    showIcons?: boolean;
    animated?: boolean;
    className?: string;
}

export interface NavigationProps {
    logo?: string;
    logoText?: string;
    items: NavigationItem[];
    ctaText?: string;
    ctaHref?: string;
    phone?: string;
    address?: string;
    className?: string;
    variant?: 'default' | 'transparent' | 'sticky';
}

export interface SidebarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    children?: SidebarItem[];
    isActive?: boolean;
    isExternal?: boolean;
}

export interface SidebarProps {
    items: SidebarItem[];
    title?: string;
    logo?: string;
    logoText?: string;
    variant?: 'default' | 'collapsed' | 'floating';
    width?: 'narrow' | 'medium' | 'wide';
    showLogo?: boolean;
    showTitle?: boolean;
    className?: string;
    onItemClick?: (item: SidebarItem) => void;
}

export interface DashboardWidget {
    id: string;
    title: string;
    content: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'full';
    type?: 'card' | 'chart' | 'table' | 'metric';
}

export interface DashboardProps {
    widgets: DashboardWidget[];
    title?: string;
    subtitle?: string;
    showHeader?: boolean;
    showSidebar?: boolean;
    sidebarItems?: Array<{
        id: string;
        label: string;
        href: string;
        icon?: React.ReactNode;
    }>;
    className?: string;
    onWidgetClick?: (widget: DashboardWidget) => void;
}

// Template Types
export interface LandingProps {
    headerProps?: HeaderProps;
    heroProps?: HeroProps;
    sections?: Array<{
        type: 'contactForm' | 'newsletter' | 'pricing' | 'testimonials' | 'faq' | 'statistics';
        props: any;
    }>;
    footerProps?: FooterProps;
    className?: string;
}

export interface DashboardTemplateProps {
    headerProps?: HeaderProps;
    sidebarProps?: SidebarProps;
    dashboardProps?: DashboardProps;
    footerProps?: FooterProps;
    className?: string;
}

export interface AuthenticationTemplateProps {
    title?: string;
    subtitle?: string;
    form: React.ReactNode;
    footerText?: string;
    footerLink?: {
        label: string;
        href: string;
    };
    className?: string;
    variant?: 'default' | 'centered' | 'minimal';
}

export interface ErrorTemplateProps {
    statusCode?: number;
    title?: string;
    message?: string;
    ctaText?: string;
    ctaHref?: string;
    className?: string;
}

export interface BlogTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    className?: string;
}

export interface DocumentationTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    sidebarContent?: React.ReactNode;
    className?: string;
}

export interface MaintenanceTemplateProps {
    title?: string;
    message?: string;
    estimatedTime?: string;
    contactEmail?: string;
    showLogo?: boolean;
    logoUrl?: string;
    className?: string;
}

export interface ProfileTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    sidebarContent?: React.ReactNode;
    className?: string;
}

export interface SettingsTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    sidebarContent?: React.ReactNode;
    className?: string;
}

export interface AdminTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    sidebarContent?: React.ReactNode;
    className?: string;
}
