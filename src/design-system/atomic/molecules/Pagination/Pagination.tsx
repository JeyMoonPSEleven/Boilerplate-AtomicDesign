import React from 'react';
import { PaginationProps } from './Pagination.types';
import { cn } from '../../../utils';
import { Icon } from '../../atoms/Icon';
import styles from './Pagination.module.css';

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    maxVisiblePages = 5,
    className,
    size = 'medium',
}) => {
    const getVisiblePages = () => {
        const pages: (number | 'ellipsis')[] = [];
        const halfVisible = Math.floor(maxVisiblePages / 2);

        let startPage = Math.max(1, currentPage - halfVisible);
        let endPage = Math.min(totalPages, currentPage + halfVisible);

        // Ajustar si estamos cerca del inicio o final
        if (endPage - startPage + 1 < maxVisiblePages) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            } else {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
        }

        // Agregar primera página y elipsis si es necesario
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('ellipsis');
            }
        }

        // Agregar páginas visibles
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Agregar elipsis y última página si es necesario
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('ellipsis');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <nav className={cn(styles.pagination, className)} aria-label="Pagination">
            {showFirstLast && (
                <button
                    className={cn(styles.paginationButton, styles[size])}
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First page"
                >
                    <Icon name="chevron-left" size="small" />
                    <Icon name="chevron-left" size="small" />
                </button>
            )}

            {showPrevNext && (
                <button
                    className={cn(styles.paginationButton, styles[size])}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <Icon name="chevron-left" size="small" />
                </button>
            )}

            {visiblePages.map((page, index) => {
                if (page === 'ellipsis') {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className={cn(styles.paginationEllipsis, styles[size])}
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={page}
                        className={cn(
                            styles.paginationButton,
                            styles[size],
                            currentPage === page && styles.active
                        )}
                        onClick={() => onPageChange(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                );
            })}

            {showPrevNext && (
                <button
                    className={cn(styles.paginationButton, styles[size])}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <Icon name="chevron-right" size="small" />
                </button>
            )}

            {showFirstLast && (
                <button
                    className={cn(styles.paginationButton, styles[size])}
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last page"
                >
                    <Icon name="chevron-right" size="small" />
                    <Icon name="chevron-right" size="small" />
                </button>
            )}
        </nav>
    );
};
