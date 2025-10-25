// src/design-system/atomic/atoms/MediaGallery/MediaGallery.tsx
import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Text } from '../Text';
import styles from './MediaGallery.module.css';

export interface MediaItem {
    id: string;
    type: 'image' | 'video' | 'audio' | 'document';
    src: string;
    title: string;
    description?: string;
    thumbnail?: string;
    duration?: string;
    size?: string;
}

export interface MediaGalleryProps {
    items: MediaItem[];
    columns?: 2 | 3 | 4 | 6;
    showInfo?: boolean;
    showActions?: boolean;
    className?: string;
}

export const MediaGallery = React.memo<MediaGalleryProps>(({
    items,
    columns = 3,
    showInfo = true,
    showActions = true,
    className
}) => {
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

    const getMediaIcon = (type: MediaItem['type']) => {
        switch (type) {
            case 'image': return 'Image';
            case 'video': return 'Play';
            case 'audio': return 'Music';
            case 'document': return 'FileText';
            default: return 'File';
        }
    };

    const handleItemClick = (item: MediaItem) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className={`${styles.mediaGallery} ${className || ''}`}>
            <div className={`${styles.grid} ${styles[`columns${columns}`]}`}>
                {items.map((item) => (
                    <div key={item.id} className={styles.mediaItem}>
                        <div
                            className={styles.mediaContainer}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className={styles.media}
                                />
                            ) : item.type === 'video' ? (
                                <div className={styles.videoContainer}>
                                    <video
                                        src={item.src}
                                        className={styles.media}
                                        poster={item.thumbnail}
                                    />
                                    <div className={styles.playOverlay}>
                                        <Icon name="Play" size="large" />
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.fileContainer}>
                                    <Icon name={getMediaIcon(item.type)} size="large" />
                                    <div className={styles.fileInfo}>
                                        <Text variant="small" weight="bold">{item.title}</Text>
                                        {item.size && (
                                            <Text variant="caption" color="muted">{item.size}</Text>
                                        )}
                                    </div>
                                </div>
                            )}

                            {item.type === 'video' && item.duration && (
                                <div className={styles.duration}>
                                    {item.duration}
                                </div>
                            )}
                        </div>

                        {showInfo && (
                            <div className={styles.info}>
                                <Text variant="small" weight="bold" className={styles.title}>
                                    {item.title}
                                </Text>
                                {item.description && (
                                    <Text variant="caption" color="muted" className={styles.description}>
                                        {item.description}
                                    </Text>
                                )}
                            </div>
                        )}

                        {showActions && (
                            <div className={styles.actions}>
                                <Button
                                    variant="secondary"
                                    size="small"
                                    onClick={() => handleItemClick(item)}
                                >
                                    <Icon name="Eye" size="small" />
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="small"
                                    onClick={() => window.open(item.src, '_blank')}
                                >
                                    <Icon name="Download" size="small" />
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal para vista ampliada */}
            {selectedItem && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <Text variant="large" weight="bold">{selectedItem.title}</Text>
                            <Button
                                variant="secondary"
                                size="small"
                                onClick={closeModal}
                            >
                                <Icon name="X" size="small" />
                            </Button>
                        </div>

                        <div className={styles.modalBody}>
                            {selectedItem.type === 'image' ? (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className={styles.modalMedia}
                                />
                            ) : selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    className={styles.modalMedia}
                                    controls
                                    autoPlay
                                />
                            ) : (
                                <div className={styles.modalFile}>
                                    <Icon name={getMediaIcon(selectedItem.type)} size="large" />
                                    <Text variant="large" weight="bold">{selectedItem.title}</Text>
                                    {selectedItem.description && (
                                        <Text variant="small" color="muted">{selectedItem.description}</Text>
                                    )}
                                </div>
                            )}
                        </div>

                        {selectedItem.description && (
                            <div className={styles.modalFooter}>
                                <Text variant="small" color="muted">{selectedItem.description}</Text>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});

MediaGallery.displayName = 'MediaGallery';
