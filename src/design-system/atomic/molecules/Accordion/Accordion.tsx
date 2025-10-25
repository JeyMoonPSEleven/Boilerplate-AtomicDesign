import React, { useState } from 'react';
import { AccordionProps } from './Accordion.types';
import { cn } from '../../../utils';
import { Icon } from '../../atoms/Icon';
import styles from './Accordion.module.css';

export const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    defaultOpenItems = [],
    className,
    variant = 'default',
}) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

    const toggleItem = (itemId: string) => {
        setOpenItems(prev => {
            if (allowMultiple) {
                return prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId];
            } else {
                return prev.includes(itemId) ? [] : [itemId];
            }
        });
    };

    return (
        <div className={cn(styles.accordion, className)}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                const isDisabled = item.disabled;

                return (
                    <div
                        key={item.id}
                        className={cn(
                            styles.accordionItem,
                            variant === 'bordered' && styles.bordered
                        )}
                    >
                        <button
                            className={cn(
                                styles.accordionTrigger,
                                variant === 'bordered' && styles.bordered,
                                isDisabled && 'disabled'
                            )}
                            onClick={() => !isDisabled && toggleItem(item.id)}
                            disabled={isDisabled}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-content-${item.id}`}
                        >
                            <span>{item.title}</span>
                            <Icon
                                name="chevron-down"
                                className={cn(
                                    styles.accordionIcon,
                                    isOpen && styles.open,
                                    isDisabled && styles.disabled
                                )}
                            />
                        </button>

                        <div
                            id={`accordion-content-${item.id}`}
                            className={cn(
                                styles.accordionContent,
                                isOpen ? 'block' : 'hidden'
                            )}
                            style={{
                                maxHeight: isOpen ? '1000px' : '0',
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className={cn(
                                styles.accordionContentInner,
                                variant === 'bordered' && styles.bordered
                            )}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
