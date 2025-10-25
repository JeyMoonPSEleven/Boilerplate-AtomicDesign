// src/design-system/atomic/atoms/FileUpload/FileUpload.tsx
import React, { useState, useRef } from 'react';
import { FileUploadProps } from './FileUpload.types';
import { cn } from '../../../utils';
import { Icon } from '../Icon';
import styles from './FileUpload.module.css';

export const FileUpload: React.FC<FileUploadProps> = ({
    label,
    accept,
    multiple = false,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    dragAndDrop = true,
    id,
    ...props
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const uploadId = id || `file-upload-${Math.random().toString(36).substr(2, 9)}`;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(event.target.files);
        }
    };

    const handleClick = () => {
        if (!disabled && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDragOver = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(true);
        }
    };

    const handleDragLeave = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(false);
        }
    };

    const handleDrop = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(false);

            if (onChange) {
                onChange(event.dataTransfer.files);
            }
        }
    };

    return (
        <div className={cn(styles.fileUploadGroup, className)}>
            {label && (
                <label
                    htmlFor={uploadId}
                    className={cn(
                        styles.fileUploadLabel,
                        styles[size],
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                >
                    {label}
                    {required && <span style={{ color: 'var(--color-danger-500)', marginLeft: '4px' }}>*</span>}
                </label>
            )}

            <div className={styles.fileUploadContainer}>
                <div
                    className={cn(
                        styles.fileUploadArea,
                        styles[size],
                        isDragOver && styles.dragover,
                        disabled && styles.disabled,
                        error && styles.error
                    )}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={(e) => {
                        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault();
                            handleClick();
                        }
                    }}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        id={uploadId}
                        accept={accept}
                        multiple={multiple}
                        onChange={handleFileChange}
                        disabled={disabled}
                        required={required}
                        className={styles.fileUploadInput}
                        {...props}
                    />

                    <Icon
                        name="upload"
                        size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                        className={styles.fileUploadIcon}
                    />

                    <div className={styles.fileUploadText}>
                        {dragAndDrop ? 'Arrastra archivos aquí o' : 'Selecciona archivos'}
                    </div>

                    <div className={styles.fileUploadSubtext}>
                        {accept ? `Tipos permitidos: ${accept}` : 'Cualquier tipo de archivo'}
                        {multiple && ' (múltiples archivos)'}
                    </div>

                    <button
                        type="button"
                        className={styles.fileUploadButton}
                        disabled={disabled}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Seleccionar archivos
                    </button>
                </div>
            </div>

            {helperText && (
                <div className={cn(styles.helperText, error && styles.error)}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
